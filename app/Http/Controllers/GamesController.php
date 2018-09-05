<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\GamesRequest;
use Illuminate\Support\Facades\Storage;
use App\Game;
use App\Genre;
use App\Platform;
use App\Reviewer;
use App\Rater;
use App\GameImages;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Debugbar;

class GamesController extends Controller
{
    // Display all games
    public function index() {
        $games = Game::all();
        foreach($games as $game) {
            
            $genres = $game->genres()->select('name', 'description')->get();
            $platforms = $game->platforms()->select('name', 'company')->get();
            $ratings = $game->ratings()->select('name', 'rating')->get();
            $reviews = $game->reviews()->select('name', 'link')->get();
            $imageBox = $game->imageBox()->select('id', 'game_id', 'path')->get();

            $game['genres'] = $genres;
            $game['platforms'] = $platforms;
            $game['ratings'] = $ratings;
            $game['reviews'] = $reviews;
            $game['image_box'] = $imageBox;           
        }

        return response($games, 200)->header('Content-Type', 'application/json');
    }


    // Display one game
    public function show($id)
    {   
        $game = Game::where('id', $id)->first();
        
        $genres = $game->genres()->select('name', 'description')->get();
        $platforms = $game->platforms()->select('name', 'company')->get();
        $ratings = $game->ratings()->select('name', 'rating')->get();
        $reviews = $game->reviews()->select('name', 'link')->get();
        $imageBox = $game->imageBox()->select('id','game_id', 'path')->get();

        $game['genres'] = $genres;
        $game['platforms'] = $platforms;
        $game['ratings'] = $ratings;
        $game['reviews'] = $reviews;
        $game['image_box'] = $imageBox;

        return response($game, 200)->header('Content-Type', 'application/json');;
    }


    //  Adding game
    public function store(GamesRequest $request) {
        
        // Getting ids from game genres
        $genres = json_decode($request->input('genres'));
        $genresIdList = array();
        $counter = 0;
        foreach($genres as $genre) {
            $genresIdList[$counter] = Genre::where('id', $genre->id)->first()->id;
            $counter++;
        }

        // Getting ids from game platforms
        $platforms = json_decode($request->input('plaforms'));
        $platformsIdList = array();
        $counter = 0;
        foreach($platforms as $platform) {
            $platformsIdList[$counter] = Platform::where('id', $platform->id)->first()->id;
            $counter++;
        }

      
        // If no link to gameplay or walkthough set empty string, cause laravel set null by default
        foreach($request->input() as $key => $value) {
            if(empty($value) && ($key == 'gameplay' || $key == 'walkthrough')){
                $request->request->set($key, '');
            }    
        }
        
        
        ///// CREATE NEW GAME ////
        $game = Game::create($request->all());
        
        ///// RELATIONSHIPS /////
        $game->genres()->sync($genresIdList);
        $game->platforms()->sync($platformsIdList);

        // Add ratings to game
         
        $raters = json_decode($request->input('ratings'));       
        foreach($raters as $rater) {
            $raterId = Rater::where('id', $rater->id)->first()->id;
            $rating = $rater->rating;
            $game->ratings()->syncWithoutDetaching([$raterId => ['rating' => $rating]]);
        }
        // Add review links to game
        $reviewers = json_decode($request->input('reviews'));        
        foreach($reviewers as $reviewer) {
            $reviewerId = Reviewer::where('id', $reviewer->id)->first()->id;
            $review = $reviewer->link;
            $game->reviews()->syncWithoutDetaching([$reviewerId => ['link' => $review]]);
        }


        $image = $request->file('image_box');
        $imageName = $image->getClientOriginalName();

        if($image !== null) {
            $path = Storage::putFileAs('public/upload/game-images', $image, $imageName);
            $imageBox = new GameImages();
            $imageBox->path = $imageName;
            $imageBox->game_id = $game->id;
            $imageBox->save();
        }
        
        return response('Gra została dodana', 201);
    }

    public function edit($slug)
    {   
        $game = new Game();
        $game = Game::where('slug', $slug)->first();
        
        $genres = $game->genres()->select('name', 'description')->get();
        $platforms = $game->platforms()->select('name', 'company')->get();
        $ratings = $game->ratings()->select('name', 'rating')->get();
        $reviews = $game->reviews()->select('name', 'link')->get();
        $imageBox = $game->imageBox()->select('id','game_id', 'path')->get();
        
        $game['genres'] = $genres;
        $game['platforms'] = $platforms;
        $game['ratings'] = $ratings;
        $game['reviews'] = $reviews;
        $game['image_box'] = $imageBox;

        return response($game, 200)->header('Content-Type', 'application/json');;
    }

    public function update(GamesRequest $request, $slug) {
        // If no link to gameplay or walkthough set empty string, cause laravel set null by default
        foreach($request->input() as $key => $value) {
            if(empty($value) && ($key == 'gameplay' || $key == 'walkthrough')){
                $request->request->set($key, '');
            }    
        }
        
        Game::where('slug', $slug)->update($request->all());

        return response('Zaktualizowano', 200);
    }
    

    public function destroy($slug) {
        $game = Game::where('slug', $slug)->delete();

        return response('Usunieto', 200);
    }

    
}


