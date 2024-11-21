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
        //

        DB::table('perhitungans')->insert([
            'id' => 1,
            'id_kegiatan' => 1,
            'id_calon' => 1,
            'id_anggota' => 1,
            'id_tps' => 1,
            'jumlah_dpt' => 1,
            'pemilih_hadir' => 1,
            'suara_sah' => 1,
            'suara_tidak_sah' => 0,
            'gambar_selfie' => null,
            'gambar_c1_1' => null,
            'gambar_c1_2' => null,
            'gambar_opsional' => null,
            'laporan' => 'Laporan 1',
            'gambar_laporan' => null,
            'perhitungan_ulang' => false,
        ]);

        DB::table('perhitungans')->insert([
            'id' => 2,
            'id_kegiatan' => 2,
            'id_calon' => 2,
            'id_anggota' => 2,
            'id_tps' => 2,
            'jumlah_dpt' => 2,
            'pemilih_hadir' => 2,
            'suara_sah' => 2,
            'suara_tidak_sah' => 0,
            'gambar_selfie' => null,
            'gambar_c1_1' => null,
            'gambar_c1_2' => null,
            'gambar_opsional' => null,
            'laporan' => 'Laporan 2',
            'gambar_laporan' => null,
            'perhitungan_ulang' => false,
        ]);
    }
}
