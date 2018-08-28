<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class GamePlatform extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('game_platform', function (Blueprint $table) {
            $table->integer('game_id')->unsigned();
            $table->integer('platform_id')->unsigned();

            $table->primary(['game_id', 'platform_id']);
            $table->index(['game_id', 'platform_id']);
            
            $table->foreign('game_id')->references('id')->on('games')->onDelete('cascade');
            $table->foreign('platform_id')->references('id')->on('platforms')->onDelete('cascade');
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
