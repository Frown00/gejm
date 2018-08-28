<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class GameReview extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        
        Schema::create('game_review', function (Blueprint $table) {
            $table->integer('game_id')->unsigned();
            $table->integer('reviewer_id')->unsigned();
            $table->string('link');

            $table->primary(['game_id', 'reviewer_id']);
            $table->index(['game_id', 'reviewer_id']);
            
            $table->foreign('game_id')->references('id')->on('games')->onDelete('cascade');
            $table->foreign('reviewer_id')->references('id')->on('reviewers')->onDelete('cascade');
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
