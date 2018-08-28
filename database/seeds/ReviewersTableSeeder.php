<?php

use Illuminate\Database\Seeder;
use App\Reviewer;

class ReviewersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $reviewer = new Reviewer();
        $reviewer->name = 'GRYOnline';
        //$reviewer->logo = '';
        $reviewer->save();

        $reviewer = new Reviewer();
        $reviewer->name = 'IGN';
        $reviewer->save();

        $reviewer = new Reviewer();
        $reviewer->name = 'GameSpot';
        $reviewer->save();

    }
}
