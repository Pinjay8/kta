<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AbsensiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        DB::table('absensis')->insert([
            'id' => 1,
            'id_anggota' => 1,
            'latitude' => '-7.4243',
            'longitude' => '109.234',
            'tps_image' => null,
            'selfie_image' => null,
            'type' => 'checkin',
            'status' => 1,
            'type' => 'checkin'
        ]);

        DB::table('absensis')->insert([
            'id' => 2,
            'id_anggota' => 2,
            'latitude' => '-7.4243',
            'longitude' => '109.234',
            'tps_image' => null,
            'selfie_image' => null,
            'type' => 'checkout',
            'status' => 1,
            'type' => 'checkin'
        ]);
    }
}
