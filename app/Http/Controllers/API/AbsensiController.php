<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Absensi;
use Illuminate\Support\Facades\Validator;


class AbsensiController extends Controller
{
    //
    public function hadir(Request $request){
        $userId = auth()->user()->id;
        $validator = Validator::make($request->all(), [
            'id_kegiatan' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'kegiatan tidak ada',
                'data' => null,
            ], 401);
        }

        $kegiatanId = $request->input('id_kegiatan');
        $absen = Absensi::where('id_anggota', $userId)->where('id_kegiatan', $kegiatanId) ->first();
        $absen->update(['status_absensi' => '1']);
    $absen->touch();
if ($absen) {

    return response()->json([
        'status' => true,
        'message' => 'Absensi berhasil',
        'data' => null,
    ], 200);
} else {
    return response()->json([
        'status' => false,
        'message' => 'Absensi Gagal',
        'data' => null,
    ], 200);
}

        
    }



}
