<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\Anggota;
use Illuminate\Support\Facades\DB;


class AnggotaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
                // \App\Models\Anggota::factory(10)->create();

        DB::table('anggotas')->insert([
            'no_anggota' => '22222',
            'nama' => 'suci',
            'no_hp' => '08123542',
            'nik' => '999999',
            'tempat_lahir' => 'magelang',
            'tgl_lahir' => '22/02/2000',
            'jk' => '1',
            'jabatan' => 'Wakil Ketua',
            'pekerjaan' => 'Mahasiswa',
            'kelurahan' => 'magelang',
            'rt' => '1',
            'rw' => '1',
            'foto_kk' => '',
            'foto_profil' => '',
            'password' => bcrypt('999999'),

        ]);



    }
}
