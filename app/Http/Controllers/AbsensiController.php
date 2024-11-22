<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kegiatan;
use App\Models\Anggota;
use App\Models\Absensi;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;


class AbsensiController extends Controller
{
    //


    public function show ( Request $request, $id){
        $namaKegiatan = Kegiatan::where('id', $id)
        ->value('nama_kegiatan');

        $absensi = Absensi::where('status', 1)
        ->with('anggota')
        ->get();

    $anggota = $absensi->pluck('anggota');
        return Inertia::render('AbsensiPage', [
            'nama_kegiatan' => $namaKegiatan,
            'data' => $anggota,
            
        ]);
    }
}
