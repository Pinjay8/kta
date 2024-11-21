<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        DB::table('users')->insert([
            'id' => 1,
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'role' => 'admin',
            'password' => bcrypt('password'),
        ]);

        DB::table('users')->insert([
            'id' => 2,
            'name' => 'Admin2',
            'email' => 'admin2@gmail.com',
            'role' => 'admin',
            'password' => bcrypt('password'),
        ]);
    }
}
