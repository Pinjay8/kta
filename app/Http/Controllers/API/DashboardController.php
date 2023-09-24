<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Anggota;
use Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class DashboardController extends Controller
{
    //
    public function dashboard(){
        $anggota = Auth::user();
        $nama = $anggota->nama;
        $no_anggota = $anggota->no_anggota;
        $jabatan = $anggota->jabatan;
        $no_hp = $anggota->no_hp;
        $tempat_lahir = $anggota->tempat_lahir;
        $tgl_lahir = $anggota->tgl_lahir;
        $foto_profil = $anggota->foto_profil;
        $foto_profilUrl = asset('storage/FotoProfil/'. $foto_profil);
        $kta = $anggota->kta;
        $ktaUrl = asset('storage/KTA/'. $kta);
        return response()->json([
            // 'data' => $anggota,

            'nama' => $nama,
            'no_anggota' => $no_anggota,
            'jabatan' => $jabatan,
            'no_hp' => $no_hp,
            'tempat_lahir' => $tempat_lahir,
            'tgl_lahir' => $tgl_lahir,
            'foto_profil' => $foto_profilUrl,
            'ktaUrl' => $ktaUrl,
        ]);
    }
}
