<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Anggota;

class Absensi extends Model
{
    use SoftDeletes;
    use HasFactory;

    protected $fillable = [
        'id_anggota',
        'latitude',
        'longitude',
        'tps_image',
        'selfie_image',
        'status',
        'type'
    ];

    public function anggota()
    {
        return $this->belongsTo(Anggota::class, 'id_anggota', 'id');
    }
}
