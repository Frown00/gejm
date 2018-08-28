<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class GameGenre extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('game_genre', function (Blueprint $table) {
            $table->integer('game_id')->unsigned();
            $table->integer('genre_id')->unsigned();

            $table->primary(['game_id', 'genre_id']);
            $table->index(['game_id', 'genre_id']);
            
            $table->foreign('game_id')->references('id')->on('games')->onDelete('cascade');
            $table->foreign('genre_id')->references('id')->on('genres')->onDelete('cascade');
        });       
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
