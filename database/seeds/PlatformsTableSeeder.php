<?php

use Illuminate\Database\Seeder;
use App\Platform;

class PlatformsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $platform = new Platform();
        $platform->name = 'XBOX 360';
        $platform->company = 'Microsoft';
        $platform->save();

        $platform = new Platform();
        $platform->name = 'PC';
        $platform->company = 'None';
        $platform->save();

        $platform = new Platform();
        $platform->name = 'Android';
        $platform->company = 'Google';
        $platform->save();
    }
}
