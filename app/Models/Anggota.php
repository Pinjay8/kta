<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;
use Apps\Models\Absensi;

class Anggota extends Authenticatable
{
    use HasApiTokens, HasFactory;
    
    protected $guard = 'anggota';

    protected $fillable = [
        'no_anggota',
        'nama',
        'no_hp',
        'nik',
        'tempat_lahir',
        'tgl_lahir',
        'jk',
        'jabatan',
        'pekerjaan',
        'kelurahan',
        'rt',
        'rw',
        'foto_kk',
        'kta',
        'foto_profil',
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
    // protected $casts = [
    //     'password' => 'hashed',
    // ];
    // public function absensi()
    // {
    //     return $this->hasMany(Absensi::class);
    // }

}
