<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;


class Tps extends Model
{
    use SoftDeletes;
    use HasFactory;

    // Tentukan tipe data primary key sebagai string
    protected $keyType = 'string';
    // Tentukan kolom yang menggunakan UUID (jika diperlukan)
    protected $casts = [
        'id' => 'string', // Menyatakan bahwa kolom id adalah string
    ];
    protected $fillable = [
        'id',
        'no_tps',
        'kelurahan',
        'kecamatan',
        'rw',
        'laki_laki',
        'perempuan',
        'dpt',
    ];

    public function anggota()
    {
        return $this->belongsTo(Anggota::class);
    }

    public function perhitungan()
    {
        return $this->belongsTo(Perhitungan::class, 'id', 'id_tps');
    }
}
