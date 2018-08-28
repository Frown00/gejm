<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Game;
use Illuminate\Support\Facades\DB;

class IndexController extends Controller
{
    public function index() {
        $games = Game::all();
        
        foreach($games as $game) {
            $genres = $game->genres()->select('name', 'description')->get();
            $platforms = $game->platforms()->select('name', 'company')->get();
            $ratings = $game->ratings()->select('name', 'rating')->get();
            $reviews = $game->reviews()->select('name', 'link')->get();
            
            $game->genres = $genres;
            $game->platforms = $platforms;
            $game->ratings = $ratings;
            $game->reviews = $reviews;
            
            echo $game;
            echo "<br><br><br>";
        }

        //echo $games;
        //var_dump($game);
        return view('index.index', compact('games'));
    }
}
