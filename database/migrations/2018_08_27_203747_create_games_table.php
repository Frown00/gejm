<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('games', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title', 255);
            $table->string('developer');
            $table->string('publisher');
            $table->string('main_genre', 255);
            $table->year('release_year');
            $table->date('release_date');
            $table->integer('game_time')->default(-1);
            $table->double('popularity', 3, 2)->default(0);
            $table->double('difficulty', 3, 2)->default(0);
            $table->double('requirements', 3, 2)->default(0);
            $table->text('requirements_detail')->nullable();
            $table->double('rating_avg', 3, 2)->default(0);
            $table->integer('age_rating')->default(3);
            
            $table->text('description')->nullable();
            $table->string('gameplay')->default('');
            $table->string('walkthrough')->default('');
            $table->string('slug', 255);
            
            $table->timestamps();

            $table->unique(array('title', 'developer', 'release_year'));
        });

        DB::statement("ALTER TABLE `games` ADD `image_box` MEDIUMBLOB");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('games');
    }
}
