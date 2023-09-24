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
        $userId = auth()->user()->no_anggota;
        $validator = Validator::make($request->all(), [
            'id_kegiatan' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => 'unauthenticated',
            ]);
        }

        $kegiatanId = $request->input('id_kegiatan');
        $absen = Absensi::where('id_anggota', $userId)->where('id_kegiatan', $kegiatanId)->update(['status_absensi' => '1']);

        return response()->json([
            'message' => 'Absensi berhasil',

        ]);
    }



}
