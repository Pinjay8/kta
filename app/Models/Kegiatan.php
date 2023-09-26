<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kegiatan extends Model
{
    use HasFactory;
    protected $fillable = [
        'nama_kegiatan',
        'lokasi',
        'jam',
        'tanggal',
        'absensi',
        'status',
        'pic',
        'notulensi',
    ];

    public function absensi()
    {
        return $this->hasMany(Absensi::class, 'id', 'id_kegiatan');
    }
}
