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
            'kecamatan' => 'Purbalingga',
            'kelurahan' => 'Purbalingga',
            'rw' => '1',
            'laki_laki' => '25',
            'perempuan' => '25',
            'dpt' => '50',
        ]);


        DB::table('tps')->insert([
            'id' => 2,
            'no_tps' => '2',
            'kecamatan' => 'Purbalingga',
            'kelurahan' => 'Purbalingga',
            'rw' => '2',
            'laki_laki' => '25',
            'perempuan' => '25',
            'dpt' => '50',
        ]);
    }
}
