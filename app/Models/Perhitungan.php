<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Perhitungan extends Model
{
    use HasFactory, SoftDeletes;

    // softdeletes

    protected $dates = ['deleted_at'];

    protected $fillable = [
        'id_kegiatan',
        'id_anggota',
        'id_tps',
        'gambar_selfie',
        'gambar_c1_1',
        'gambar_c1_2',
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

    public function perhitungan_calons()
    {
        return $this->belongsTo(PerhitunganCalon::class, 'id_perhitungan', 'id');
    }

    // public function calon()
    // {
    //     return $this->belongsTo(Calon::class, 'id_calon', 'id');
    // }
}
