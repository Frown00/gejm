<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRatersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('raters', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 255)->unique();
            $table->timestamps();
        });

        DB::statement("ALTER TABLE `raters` ADD `logo` MEDIUMBLOB");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('raters');
    }
}
