<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PerhitunganCalonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Gubernur
        DB::table('perhitungan_calons')->insert([
            'id_kegiatan' => 1,
            'id_anggota' => 1,
            'id_tps' => 1,
            'id_calon' => 3,
            'suara_calon' => 25,
            'perhitungan_ulang' => false,
        ]);

        DB::table('perhitungan_calons')->insert([
            'id_kegiatan' => 1,
            'id_anggota' => 1,
            'id_tps' => 1,
            'id_calon' => 4,
            'suara_calon' => 25,
            'perhitungan_ulang' => false,
        ]);

        // Walikota
        DB::table('perhitungan_calons')->insert([
            'id_kegiatan' => 2,
            'id_anggota' => 2,
            'id_tps' => 2,
            'id_calon' => 1,
            'suara_calon' => 25,
            'perhitungan_ulang' => false,
        ]);

        DB::table('perhitungan_calons')->insert([
            'id_kegiatan' => 2,
            'id_anggota' => 2,
            'id_tps' => 2,
            'id_calon' => 2,
            'suara_calon' => 25,
            'perhitungan_ulang' => false,
        ]);
    }
}
