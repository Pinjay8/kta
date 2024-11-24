<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CalonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('calons')->insert([
            'id' => 1,
            'nama' => 'Andika Perkasa & Hendrar Prihadi',
            'no_urut' => 1,
            'status' => 'Gubernur',
        ]);

        DB::table('calons')->insert([
            'id' => 2,
            'nama' => 'Ahmad Luthfi & Taj Yasin',
            'no_urut' => 2,
            'status' => 'Gubernur',
        ]);

        DB::table('calons')->insert([
            'id' => 3,
            'nama' => 'dr. Muchamad Nur Aziz – M. Mansyur',
            'no_urut' => 1,
            'status' => 'Walikota',
        ]);

        DB::table('calons')->insert([
            'id' => 4,
            'nama' => 'Damar Prasetyono – dr. Sri Harso',
            'no_urut' => 2,
            'status' => 'Walikota',
        ]);
    }
}
