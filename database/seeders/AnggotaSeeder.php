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
            'id' => 1,
            'no_anggota' => 1,
            'nama' => 'Sample user',
            'no_hp' => '123',
            'nik' => '123',
            'id_tps' => 1,
            'alamat' => 'Jl. Purbalingga',
            'kecamatan' => 'Purbalingga',
            'kelurahan' => 'purbalingga',
            'status' => 'Saksi Walikota',
            'password' => bcrypt('12345'),
        ]);

        DB::table('anggotas')->insert([
            'id' => 2,
            'no_anggota' => 2,
            'nama' => 'Sample user 2',
            'no_hp' => '345',
            'nik' => '345',
            'id_tps' => 2,
            'alamat' => 'Jl. Purbalingga',
            'kecamatan' => 'Purbalingga',
            'kelurahan' => 'purbalingga',
            'status' => 'Saksi Gubernur',
            'password' => bcrypt('12345'),
        ]);

        DB::table('anggotas')->insert([
            'id' => 3,
            'no_anggota' => 9123,
            'nama' => 'Retno adi saputra',
            'no_hp' => '1234',
            'nik' => '123',
            'id_tps' => 2,
            'password' => bcrypt('12345'),
            'alamat' => 'Jl. Purbalingga',
            'kecamatan' => 'Purbalingga',
            'kelurahan' => 'purbalingga',
            'status' => 'Saksi Gubernur',
        ]);

        // DB::table('anggotas')->insert([
        //     'no_anggota' => '',
        //     'nama' => 'User 1',
        //     'no_hp' => '081234561444',
        //     'nik' => '330311',
        //     'tempat_lahir' => 'purbalingga',
        //     'tgl_lahir' => '22/02/2000',
        //     'jk' => '1',
        //     'jabatan' => 'Relawan',
        //     'pekerjaan' => 'Wiraswasta',
        //     'kelurahan' => 'purbalingga',
        //     'rt' => '2',
        //     'rw' => '4',
        //     'foto_kk' => '',
        //     'foto_profil' => '',
        //     'password' => bcrypt('12345'),
        // ]);
        // DB::table('anggotas')->insert([
        //     'no_anggota' => '11112',
        //     'nama' => 'User 2',
        //     'no_hp' => '0812345612',
        //     'nik' => '330312',
        //     'tempat_lahir' => 'purbalingga',
        //     'tgl_lahir' => '22/02/2000',
        //     'jk' => '1',
        //     'jabatan' => 'Relawan',
        //     'pekerjaan' => 'Wiraswasta',
        //     'kelurahan' => 'purbalingga',
        //     'rt' => '2',
        //     'rw' => '4',
        //     'foto_kk' => '',
        //     'foto_profil' => '',
        //     'password' => bcrypt('12345'),
        // ]);
        // DB::table('anggotas')->insert([
        //     'no_anggota' => '11113',
        //     'nama' => 'User 3',
        //     'no_hp' => '081234563',
        //     'nik' => '330313',
        //     'tempat_lahir' => 'purbalingga',
        //     'tgl_lahir' => '22/02/2000',
        //     'jk' => '1',
        //     'jabatan' => 'Relawan',
        //     'pekerjaan' => 'Wiraswasta',
        //     'kelurahan' => 'purbalingga',
        //     'rt' => '2',
        //     'rw' => '4',
        //     'foto_kk' => '',
        //     'foto_profil' => '',
        //     'password' => bcrypt('12345'),
        // ]);
        // DB::table('anggotas')->insert([
        //     'no_anggota' => '11114',
        //     'nama' => 'User 4',
        //     'no_hp' => '0812345614',
        //     'nik' => '330314',
        //     'tempat_lahir' => 'purbalingga',
        //     'tgl_lahir' => '22/02/2000',
        //     'jk' => '1',
        //     'jabatan' => 'Relawan',
        //     'pekerjaan' => 'Wiraswasta',
        //     'kelurahan' => 'purbalingga',
        //     'rt' => '2',
        //     'rw' => '4',
        //     'foto_kk' => '',
        //     'foto_profil' => '',
        //     'password' => bcrypt('12345'),
        // ]);
        // DB::table('anggotas')->insert([
        //     'no_anggota' => '11115',
        //     'nama' => 'User 5',
        //     'no_hp' => '0812345615',
        //     'nik' => '330315',
        //     'tempat_lahir' => 'purbalingga',
        //     'tgl_lahir' => '22/02/2000',
        //     'jk' => '1',
        //     'jabatan' => 'Relawan',
        //     'pekerjaan' => 'Wiraswasta',
        //     'kelurahan' => 'purbalingga',
        //     'rt' => '2',
        //     'rw' => '4',
        //     'foto_kk' => '',
        //     'foto_profil' => '',
        //     'password' => bcrypt('12345'),
        // ]);
        // DB::table('anggotas')->insert([
        //     'no_anggota' => '11116',
        //     'nama' => 'User 6',
        //     'no_hp' => '0812345616',
        //     'nik' => '330316',
        //     'tempat_lahir' => 'purbalingga',
        //     'tgl_lahir' => '22/02/2000',
        //     'jk' => '1',
        //     'jabatan' => 'Relawan',
        //     'pekerjaan' => 'Wiraswasta',
        //     'kelurahan' => 'purbalingga',
        //     'rt' => '2',
        //     'rw' => '4',
        //     'foto_kk' => '',
        //     'foto_profil' => '',
        //     'password' => bcrypt('12345'),
        // ]);
        // DB::table('anggotas')->insert([
        //     'no_anggota' => '11117',
        //     'nama' => 'User 7',
        //     'no_hp' => '0812345617',
        //     'nik' => '330317',
        //     'tempat_lahir' => 'purbalingga',
        //     'tgl_lahir' => '22/02/2000',
        //     'jk' => '1',
        //     'jabatan' => 'Relawan',
        //     'pekerjaan' => 'Wiraswasta',
        //     'kelurahan' => 'purbalingga',
        //     'rt' => '2',
        //     'rw' => '4',
        //     'foto_kk' => '',
        //     'foto_profil' => '',
        //     'password' => bcrypt('12345'),
        // ]);
        // DB::table('anggotas')->insert([
        //     'no_anggota' => '11118',
        //     'nama' => 'User 8',
        //     'no_hp' => '0812345618',
        //     'nik' => '330318',
        //     'tempat_lahir' => 'purbalingga',
        //     'tgl_lahir' => '22/02/2000',
        //     'jk' => '1',
        //     'jabatan' => 'Relawan',
        //     'pekerjaan' => 'Wiraswasta',
        //     'kelurahan' => 'purbalingga',
        //     'rt' => '2',
        //     'rw' => '4',
        //     'foto_kk' => '',
        //     'foto_profil' => '',
        //     'password' => bcrypt('12345'),
        // ]);
        // DB::table('anggotas')->insert([
        //     'no_anggota' => '11119',
        //     'nama' => 'User 9',
        //     'no_hp' => '081234569',
        //     'nik' => '330319',
        //     'tempat_lahir' => 'purbalingga',
        //     'tgl_lahir' => '22/02/2000',
        //     'jk' => '1',
        //     'jabatan' => 'Relawan',
        //     'pekerjaan' => 'Wiraswasta',
        //     'kelurahan' => 'purbalingga',
        //     'rt' => '2',
        //     'rw' => '4',
        //     'foto_kk' => '',
        //     'foto_profil' => '',
        //     'password' => bcrypt('12345'),
        // ]);
        // DB::table('anggotas')->insert([
        //     'no_anggota' => '121222',
        //     'nama' => 'User 10',
        //     'no_hp' => '0812345610',
        //     'nik' => '3303110',
        //     'tempat_lahir' => 'purbalingga',
        //     'tgl_lahir' => '22/02/2000',
        //     'jk' => '1',
        //     'jabatan' => 'Relawan',
        //     'pekerjaan' => 'Wiraswasta',
        //     'kelurahan' => 'purbalingga',
        //     'rt' => '2',
        //     'rw' => '4',
        //     'foto_kk' => '',
        //     'foto_profil' => '',
        //     'password' => bcrypt('12345'),
        // ]);


    }
}
