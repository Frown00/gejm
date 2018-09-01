<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $user->name = 'user';
        $user->email = 'user@gmail.com';
        $user->password = bcrypt('haslo');
        $user->save();

        $user = new User();
        $user->name = 'Admin';
        $user->email = 'admin@gejm.com';
        $user->password = bcrypt('admin');
        $user->save();
    }
}
