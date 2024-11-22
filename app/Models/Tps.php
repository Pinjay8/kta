<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Tps extends Model
{
    use SoftDeletes;
    use HasFactory;

    protected $fillable = [
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
