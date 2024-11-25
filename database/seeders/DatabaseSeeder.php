<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Anggota;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            TpsSeeder::class,
            AnggotaSeeder::class,
            CalonSeeder::class,
            KegiatanSeeder::class,
            AbsensiSeeder::class,
            PerhitunganSeeder::class,
            PerhitunganCalonSeeder::class,
            PengajuanPerhitunganUlangSeeder::class,
        ]);
        // $this->call(UserSeeder::class);
        // $this->call(TpsSeeder::class);
        // $this->call(CalonSeeder::class);
        // $this->call(AbsensiSeeder::class);
        // $this->call(KegiatanSeeder::class);
        // $this->call(AnggotaSeeder::class);
    }
}
