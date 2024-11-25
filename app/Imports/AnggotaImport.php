<?php

namespace App\Imports;

use App\Models\Anggota;
use App\Models\Tps;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Support\Facades\Log;

class AnggotaImport implements ToModel, WithHeadingRow
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        if (
            isset($row['no_anggota']) && isset($row['nama']) && isset($row['no_hp']) &&
            isset($row['nik']) && isset($row['id_tps']) && isset($row['alamat']) &&
            isset($row['kecamatan']) && isset($row['kelurahan']) && isset($row['status']) &&
            isset($row['password'])
        ) {
            // Validasi id_tps
            if (Tps::where('id', $row['id_tps'])->exists()) {
                return new Anggota([
                    'no_anggota' => $row['no_anggota'],
                    'nama' => $row['nama'],
                    'no_hp' => $row['no_hp'],
                    'nik' => $row['nik'],
                    'id_tps' => $row['id_tps'],
                    'alamat' => $row['alamat'],
                    'kecamatan' => $row['kecamatan'],
                    'kelurahan' => $row['kelurahan'],
                    'status' => $row['status'],
                    'password' => $row['password'],
                ]);
            } else {
                // Jika id_tps tidak ditemukan di tabel tps, Anda bisa menangani error atau log
                Log::error("id_tps {$row['id_tps']} tidak ditemukan di tabel tps");
            }
        }
    }
}
