<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Absensi;

class Anggota extends Authenticatable
{
    use SoftDeletes;
    use HasApiTokens, HasFactory;

    protected $guard = 'anggota';

    protected $fillable = [
        'no_anggota',
        'nama',
        'no_hp',
        'nik',
        'id_tps',
        'alamat',
        'kecamatan',
        'kelurahan',
        'rt',
        'rw',
        'mendaftar_sebagai',
        'password',
    ];

    protected $hidden = [
        'password',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'password' => 'hashed',
    ];
    public function absensi()
    {
        return $this->hasMany(Absensi::class);
    }

    public function tps()
    {
        return $this->belongsTo(Tps::class, 'id_tps', 'id');
    }
}
