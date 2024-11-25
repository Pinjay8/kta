<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PerhitunganSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('perhitungans')->insert([
            'id_kegiatan' => 1,
            'id_anggota' => 1,
            'id_tps' => "1Rawa",
            'gambar_selfie' => null,
            'gambar_c1_1' => null,
            'gambar_c1_2' => null,
            'perhitungan_ulang' => false,
        ]);

        DB::table('perhitungans')->insert([
            'id_kegiatan' => 2,
            'id_anggota' => 2,
            'id_tps' => "2Budi",
            'gambar_selfie' => null,
            'gambar_c1_1' => null,
            'gambar_c1_2' => null,
            'perhitungan_ulang' => false,
        ]);
    }
}
