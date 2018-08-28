<?php

use Illuminate\Database\Seeder;
use App\Game;

class GamesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $game = new Game();
        $game->title = 'Counter Strike Global Offensive';
        $game->developer = 'Valve';
        $game->publisher = 'Valve';
        $game->main_genre = 'FPS';
        $game->release_year = '2010';
        $game->release_date = '2010-01-02';   
        $game->game_time = 200;
        $game->popularity = 4.5;
        $game->difficulty = 5.0;
        $game->requirements = 4.0;
        //$game->requirements_detail = 'Intel Core i3 2.30Ghz <br> GTX 660Ti';
        $game->rating_avg = 6.5;
        $game->age_rating = 13;
        //$game->description = '';
        //$game->gameplay = '';
        //$game->walkthrough = '';
        $game->slug = str_slug($game->title);
        $game->save();
        
        $fps = App\Genre::where('name', 'fps')->first();
        $rpg = App\Genre::where('name', 'rpg')->first();
        $game->genres()->sync([$fps->id, $rpg->id]);
        //$game->genres()->attach([1, 2]);
        
        $pc = App\Platform::where('name', 'pc')->first();
        $xbox360 = App\Platform::where('name', 'xbox 360')->first();
        $game->platforms()->sync([$pc->id, $xbox360->id]);
        
        $forbes = App\Rater::where('name', 'forbes')->first();
        $gryOnline = App\Rater::where('name', 'GRYOnline')->first();
        $metacritic = App\Rater::where('name', 'Metacritic')->first();
        $game->ratings()->sync([$forbes->id=> ['rating'=> 4.25], $gryOnline->id=> ['rating'=> 4.75]]);

        $reviewer1 = App\Reviewer::where('name', 'GRYOnline')->first();
        $reviewer2 = App\Reviewer::where('name', 'IGN')->first();
        $reviewer3 = App\Reviewer::where('name', 'GameSpot')->first();
        $game->reviews()->sync([$reviewer1->id=> ['link'=> 'https://www.gry-online.pl/S020.asp?ID=8485'], $reviewer2->id=> ['link'=> 'http://www.ign.com/articles/2012/08/28/counter-strike-global-offensive-review']]);
        //$game->reviews()->attach(1, ['link'=> 'https://www.gry-online.pl/S020.asp?ID=8485']);
        


        $game = new Game();
        $game->title = 'Half Life 2';
        $game->developer = 'Valve';
        $game->publisher = 'Valve';
        $game->main_genre = 'FPS';
        $game->release_year = '2007';   
        $game->release_date = '2007-01-02';   
        $game->game_time = 50;
        $game->popularity = 4.0;
        $game->difficulty = 4.0;
        $game->requirements = 0.6;
        $game->requirements_detail = 'Intel Core i3 2.30Ghz <br> GTX 660Ti';
        $game->rating_avg = 6.3;
        $game->age_rating = 16;
        $game->description = 'Opis taki sobie piękny';
        $game->gameplay = 'https://www.youtube.com/watch?v=5Wavn29LMrs';
        $game->walkthrough = 'https://www.youtube.com/watch?v=91uWeqArrok';
        $game->slug = str_slug($game->title);
        $game->save();
        
    }
}
