<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Anggota;
use Illuminate\Support\Facades\DB;

class KegiatanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        // DB::table('kegiatans')->insert([
        //     'id' => '1',
        //     'nama_kegiatan' => 'Konsolidasi Magelang Kota',
        //     'lokasi' => 'Gedung Olahraga Kota Magelang',
        //     'jam' => '17.00',
        //     'tanggal' => '30/09/2023',
        //     'absensi' => '1',//  0 = absensi ditutup, 1 = absensi dibuka, 2 = belum absensi di acara lampau
        //     'status' => '1',// 0 = akan datang, 1 = berlangsung, 2 = sudah selesai
        //     'pic' => 'Tubagus Afif Nur Hidayat',
        //     'notulensi' => 'https://drive.google.com/file/d/1aNf4-BT_zoiQVb_njTvfa3I2ZPE4CsNe/view?usp=share_link' ,
        // ]);

        // DB::table('kegiatans')->insert([
        //     'id' => '2',
        //     'nama_kegiatan' => 'Meeting Proyek A',
        //     'lokasi' => 'Gedung Olahraga Kota Magelang',
        //     'jam' => '13.00',
        //     'tanggal' => '20/09/2023',
        //     'absensi' => '0',//  0 = absensi ditutup, 1 = absensi dibuka, 2 = belum absensi di acara lampau
        //     'status' => '0',// 0 = akan datang, 1 = berlangsung, 2 = sudah selesai
        //     'pic' => 'Tubagus Afif Nur Hidayat',
        //     'notulensi' => 'https://drive.google.com/file/d/1aNf4-BT_zoiQVb_njTvfa3I2ZPE4CsNe/view?usp=share_link' ,
        // ]);

        // DB::table('kegiatans')->insert([
        //     'id' => '3',
        //     'nama_kegiatan' => 'Meeting Proyek B',
        //     'lokasi' => 'Auditorium Universitas Perwira Purbalingga',
        //     'jam' => '09.00',
        //     'tanggal' => '23/09/2023',
        //     'absensi' => '0',//  0 = absensi ditutup, 1 = absensi dibuka, 2 = belum absensi di acara lampau
        //     'status' => '1',// 0 = akan datang, 1 = berlangsung, 2 = sudah selesai
        //     'pic' => 'Tubagus Afif Nur Hidayat',
        //     'notulensi' => 'https://drive.google.com/file/d/1aNf4-BT_zoiQVb_njTvfa3I2ZPE4CsNe/view?usp=share_link' ,
        // ]);
        // DB::table('kegiatans')->insert([
        //     'id' => '4',
        //     'nama_kegiatan' => 'Meeting Proyek C',
        //     'lokasi' => 'Balai Pertemuan Kabupaten Purbalingga',
        //     'jam' => '10.00',
        //     'tanggal' => '23/09/2023',
        //     'absensi' => '0',//  0 = absensi ditutup, 1 = absensi dibuka, 2 = belum absensi di acara lampau
        //     'status' => '1',// 0 = akan datang, 1 = berlangsung, 2 = sudah selesai
        //     'pic' => 'Tubagus Afif Nur Hidayat',
        //     'notulensi' => 'https://drive.google.com/file/d/1aNf4-BT_zoiQVb_njTvfa3I2ZPE4CsNe/view?usp=share_link' ,
        // ]);
        DB::table('kegiatans')->insert([
            'id' => '5',
            'nama_kegiatan' => 'Meeting Proyek D',
            'lokasi' => 'GOR Mahesa Jenar',
            'jam' => '11.00',
            'tanggal' => '23/09/2023',
            'absensi' => '0',//  0 = absensi ditutup, 1 = absensi dibuka, 2 = belum absensi di acara lampau
            'status' => '2',// 0 = akan datang, 1 = berlangsung, 2 = sudah selesai
            'pic' => 'Retno Adi Saputra',
            'notulensi' => 'https://drive.google.com/file/d/1aNf4-BT_zoiQVb_njTvfa3I2ZPE4CsNe/view?usp=share_link' ,
        ]);

        
    }
}
