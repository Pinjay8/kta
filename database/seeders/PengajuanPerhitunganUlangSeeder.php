<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PengajuanPerhitunganUlangSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('pengajuan_perhitungan_ulangs')->insert([
            'id' => 1,
            'id_kegiatan' => 1,
            'id_anggota' => 1,
            'is_accepted' => 0,
            'reason' => 'Tidak sesuai dengan hasil perhitungan',
        ]);
    }
}
