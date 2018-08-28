<?php

use Illuminate\Database\Seeder;
use App\Genre;

class GenresTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $genre = new Genre();
        $genre->name = 'FPS';
        $genre->description = 'Gatunek opierający się na strzelaniu do przeciwników';
        $genre->save();

        $genre = new Genre();
        $genre->name = 'RPG';
        $genre->description = 'Często opowiada o wizjach średniowiecza, choć nie jest to reguła. Opiera się na przygodzie, robieniu zadań, walce, przemierzaniu świata';
        $genre->save();

        $genre = new Genre();
        $genre->name = 'RTS';
        $genre->description = 'Zarządzaj jednostkami, wojskiem bądź również miastem.';
        $genre->save();
    }
}
