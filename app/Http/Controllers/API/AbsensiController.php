<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Absensi;


class AbsensiController extends Controller
{
    //
    public function hadir(Request $request){
        $userId = auth()->user()->no_anggota;
        $kegiatanId = $request->input('id_kegiatan');

        $absen = Absensi::where('id_anggota', $userId)->where('id_kegiatan', $kegiatanId)->update(['status_absensi' => '1']);

        return response()->json([
            'message' => 'Absensi berhasil',

        ]);
    }



}
