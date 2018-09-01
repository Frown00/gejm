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

    public function store(GamesRequest $request) {
        
        //dd($request->all());
        $game = Game::create($request->all());
        
        return response('Gra została dodana', 201);
    }
}


