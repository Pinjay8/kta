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
            'id' => 1,
            'id_perhitungan' => 1,
            'id_anggota' => 1,
            'id_tps' => 1,
            'id_calon' => 3,
            'suara_calon' => 25,
            'gambar_tps' => null,
            'gambar_selfie' => null,
            'gambar_c1_1' => null,
            'gambar_c1_2' => null,
            'gambar_opsional' => null,
            'laporan' => 'Laporan 1',
            'gambar_laporan' => null,
            'perhitungan_ulang' => false,
        ]);

        DB::table('perhitungan_calons')->insert([
            'id' => 2,
            'id_perhitungan' => 1,
            'id_anggota' => 1,
            'id_tps' => 1,
            'id_calon' => 4,
            'suara_calon' => 25,
            'gambar_tps' => null,
            'gambar_selfie' => null,
            'gambar_c1_1' => null,
            'gambar_c1_2' => null,
            'gambar_opsional' => null,
            'laporan' => 'Laporan 1',
            'gambar_laporan' => null,
            'perhitungan_ulang' => false,
        ]);


        //Walikota
        DB::table('perhitungan_calons')->insert([
            'id' => 3,
            'id_perhitungan' => 3,
            'id_anggota' => 2,
            'id_tps' => 2,
            'id_calon' => 1,
            'suara_calon' => 25,
            'gambar_tps' => null,
            'gambar_selfie' => null,
            'gambar_c1_1' => null,
            'gambar_c1_2' => null,
            'gambar_opsional' => null,
            'laporan' => 'Laporan 1',
            'gambar_laporan' => null,
            'perhitungan_ulang' => false,
        ]);

        DB::table('perhitungan_calons')->insert([
            'id' => 4,
            'id_perhitungan' => 3,
            'id_anggota' => 2,
            'id_tps' => 2,
            'id_calon' => 2,
            'suara_calon' => 25,
            'gambar_tps' => null,
            'gambar_selfie' => null,
            'gambar_c1_1' => null,
            'gambar_c1_2' => null,
            'gambar_opsional' => null,
            'laporan' => 'Laporan 1',
            'gambar_laporan' => null,
            'perhitungan_ulang' => false,
        ]);
    }
}
