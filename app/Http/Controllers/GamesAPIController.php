<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Game;

class GamesAPIController extends Controller
{
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
            $game['image_box'] = $imageBox[0];
            $game['popularity'] = round(DB::table('games')->where('id', $game->id)->value('popularity'), 2);  
            $game['difficulty'] = round(DB::table('games')->where('id', $game->id)->value('difficulty'), 2); 
            $game['rating_avg'] = round(DB::table('games')->where('id', $game->id)->value('rating_avg'), 2); 
           
        }

        return response($games, 200)->header('Content-Type', 'application/json');
    }

    public function show($slug)
    {   
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
        $game['image_box'] = $imageBox[0];
        $game['popularity'] = round(DB::table('games')->where('slug', $slug)->value('popularity'), 2);  
        $game['difficulty'] = round(DB::table('games')->where('slug', $slug)->value('difficulty'), 2); 
        $game['rating_avg'] = round(DB::table('games')->where('slug', $slug)->value('rating_avg'), 2); 

        return response($game, 200)->header('Content-Type', 'application/json');
    }
}
