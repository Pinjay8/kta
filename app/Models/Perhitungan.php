<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Perhitungan extends Model
{
    use SoftDeletes;
    use HasFactory;

    protected $fillable = [
        'id_kegiatan',
        'id_anggota',
        'id_tps',
        'id_calon',
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

    public function kegiatan()
    {
        return $this->belongsTo(Kegiatan::class, 'id_kegiatan', 'id');
    }

    public function anggota()
    {
        return $this->belongsTo(Anggota::class, 'id_anggota', 'id');
    }

    public function tps()
    {
        return $this->belongsTo(Tps::class, 'id_tps', 'id');
    }
}