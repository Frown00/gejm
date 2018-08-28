<?php

use Illuminate\Database\Seeder;
use App\Rater;

class RatersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $rater = new Rater();
        $rater->name = 'Forbes';
        $rater->save();

        $rater = new Rater();
        $rater->name = 'GRYOnline';
        $rater->save();

        $rater = new Rater();
        $rater->name = 'Metacritic';
        $rater->save();
    }
}
