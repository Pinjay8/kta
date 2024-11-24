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
            'id_anggota' => 1,
            'id_tps' => 1,
            'gambar_selfie' => null,
            'dptb' => 0,
            'pemilih_hadir' => 50,
            'suara_sah' => 50,
            'suara_tidak_sah' => 0,
            'gambar_laporan' => null,
            'catatan' => '',
            'perhitungan_ulang' => false,
        ]);

        // DB::table('perhitungans')->insert([
        //     'id' => 2,
        //     'id_kegiatan' => 1,
        //     'id_anggota' => 1,
        //     'id_tps' => 1,
        //     'dptb' => 0,
        //     'pemilih_hadir' => 50,
        //     'suara_sah' => 50,
        //     'suara_tidak_sah' => 0,
        //     'perhitungan_ulang' => false,
        // ]);

        DB::table('perhitungans')->insert([
            'id' => 3,
            'id_kegiatan' => 2,
            'id_anggota' => 2,
            'id_tps' => 2,
            'gambar_selfie' => null,
            'dptb' => 0,
            'pemilih_hadir' => 50,
            'suara_sah' => 50,
            'suara_tidak_sah' => 0,
            'gambar_laporan' => null,
            'catatan' => '',
            'perhitungan_ulang' => false,
        ]);


        // DB::table('perhitungans')->insert([
        //     'id' => 4,
        //     'id_kegiatan' => 2,
        //     'id_anggota' => 2,
        //     'id_tps' => 2,
        //     'dptb' => 0,
        //     'pemilih_hadir' => 50,
        //     'suara_sah' => 50,
        //     'suara_tidak_sah' => 0,
        //     'perhitungan_ulang' => false,
        // ]);



        // DB::table('perhitungans')->insert([
        //     'id' => 3,
        //     'id_kegiatan' => 3,
        //     'id_calon' => 3,
        //     'id_anggota' => 2,
        //     'id_tps' => 1,
        //     'dptb' => 0,
        //     'pemilih_hadir' => 30,
        //     'suara_sah' => 30,
        //     'suara_tidak_sah' => 0,
        //     'gambar_selfie' => null,
        //     'gambar_c1_1' => null,
        //     'gambar_c1_2' => null,
        //     'gambar_opsional' => null,
        //     'laporan' => 'Laporan 2',
        //     'gambar_laporan' => null,
        //     'perhitungan_ulang' => false,
        // ]);



        // DB::table('perhitungans')->insert([
        //     'id' => 4,
        //     'id_kegiatan' => 4,
        //     'id_calon' => 4,
        //     'id_anggota' => 2,
        //     'id_tps' => 2,
        //     'dptb' => 0,
        //     'pemilih_hadir' => 50,
        //     'suara_sah' => 50,
        //     'suara_tidak_sah' => 0,
        //     'gambar_selfie' => null,
        //     'gambar_c1_1' => null,
        //     'gambar_c1_2' => null,
        //     'gambar_opsional' => null,
        //     'laporan' => 'Laporan 2',
        //     'gambar_laporan' => null,
        //     'perhitungan_ulang' => false,
        // ]);
    }
}
