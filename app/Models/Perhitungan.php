<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Perhitungan extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_kegiatan',
        'id_anggota',
        'id_tps',
        'jumlah_dpt',
        'pemilih_hadir',
        'suara_sah',
        'suara_tidak_sah',
        'gambar_selfie',
        'gambar_c1_1',
        'gambar_c1_2',
        'gambar_opsional',
        'laporan',
        'gambar_laporan',
        'perhitungan_ulang',
    ];
}
