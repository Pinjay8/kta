<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PerhitunganCalon extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'id_kegiatan',
        'id_anggota',
        'id_tps',
        'id_calon',
        'suara_calon',
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

    public function calon()
    {
        return $this->belongsTo(Calon::class, 'id_calon', 'id');
    }
}
