<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\GamesRequest;
use App\Game;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Debugbar;

class GamesController extends Controller
{
    
    public function index() {
        $games = Game::all();
        foreach($games as $game) {
            
            $genres = $game->genres()->select('name', 'description')->get();
            $platforms = $game->platforms()->select('name', 'company')->get();
            $ratings = $game->ratings()->select('name', 'rating')->get();
            $reviews = $game->reviews()->select('name', 'link')->get();

            $game['genres'] = $genres;
            $game['platforms'] = $platforms;
            $game['ratings'] = $ratings;
            $game['reviews'] = $reviews;
            

            $game['image_box'] = base64_encode($game['image_box']);
        }

        return response($games, 200)->header('Content-Type', 'application/json');
    }

    public function show($id)
    {   
        $game = Game::where('id', $id)->first();
        
        $genres = $game->genres()->select('name', 'description')->get();
        $platforms = $game->platforms()->select('name', 'company')->get();
        $ratings = $game->ratings()->select('name', 'rating')->get();
        $reviews = $game->reviews()->select('name', 'link')->get();
        
        $game['genres'] = $genres;
        $game['platforms'] = $platforms;
        $game['ratings'] = $ratings;
        $game['reviews'] = $reviews;
        $game['image_box'] = base64_encode($game['image_box']);

        return response($game, 200)->header('Content-Type', 'application/json');;
    }

    public function store(GamesRequest $request) {
   
        // If no link to gameplay or walkthough set empty string, cause laravel set null by default
        foreach($request->input() as $key => $value) {
            if(empty($value) && ($key == 'gameplay' || $key == 'walkthrough')){
                $request->request->set($key, '');
            }    
        }
        Game::create($request->all());

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
        
        $game['genres'] = $genres;
        $game['platforms'] = $platforms;
        $game['ratings'] = $ratings;
        $game['reviews'] = $reviews;
        $game['image_box'] = base64_encode($game['image_box']);

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
}


