<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class GameRating extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('game_rating', function (Blueprint $table) {
            $table->integer('game_id')->unsigned();
            $table->integer('rater_id')->unsigned();
            $table->double('rating');

            $table->primary(['game_id', 'rater_id']);
            $table->index(['game_id', 'rater_id']);
            
            $table->foreign('game_id')->references('id')->on('games')->onDelete('cascade');
            $table->foreign('rater_id')->references('id')->on('raters')->onDelete('cascade');
                
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
