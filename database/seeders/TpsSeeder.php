<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TpsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        DB::table('tps')->insert([
            'id' => 1,
            'no_tps' => '1',
            'alamat' => 'Jl. TPS 1',
            'kecamatan' => 'Purbalingga',
            'kelurahan' => 'Purbalingga',
            'rt' => '1',
            'rw' => '1',
        ]);


        DB::table('tps')->insert([
            'id' => 2,
            'no_tps' => '2',
            'alamat' => 'Jl. TPS 2',
            'kecamatan' => 'Purbalingga',
            'kelurahan' => 'Purbalingga',
            'rt' => '2',
            'rw' => '2',
        ]);
    }
}
