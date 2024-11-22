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

    public function checkin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_anggota' => 'required',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
            'tps_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'selfie_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'status' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation Error',
                'data' => $validator->errors(),
            ], 400);
        }

        $tpsImagePath = $request->file('tps_image')->store('images/tps', 'public');
        $selfieImagePath = $request->file('selfie_image')->store('images/selfie', 'public');

        $absensi = Absensi::create([
            'id_anggota' => $request->input('id_anggota'),
            'latitude' => $request->input('latitude'),
            'longitude' => $request->input('longitude'),
            'tps_image' => $tpsImagePath,
            'type' => 'checkin',
            'selfie_image' => $selfieImagePath,
            'status' => $request->input('status'),
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Absensi berhasil dibuat',
            'data' => $absensi,
        ], 201);
    }

    public function checkout(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_anggota' => 'required',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
            'tps_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'selfie_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'status' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation Error',
                'data' => $validator->errors(),
            ], 400);
        }

        $tpsImagePath = $request->file('tps_image')->store('images/tps', 'public');
        $selfieImagePath = $request->file('selfie_image')->store('images/selfie', 'public');

        $absensi = Absensi::create([
            'id_anggota' => $request->input('id_anggota'),
            'latitude' => $request->input('latitude'),
            'longitude' => $request->input('longitude'),
            'tps_image' => $tpsImagePath,
            'type' => 'checkout',
            'selfie_image' => $selfieImagePath,
            'status' => $request->input('status'),
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Absensi berhasil dibuat',
            'data' => $absensi,
        ], 201);
    }



    public function getstatus(Request $request){
        $validator = Validator::make($request->all(), [
            'id_anggota' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation Error',
                'data' => $validator->errors(),
            ], 400);
        }

        $idAnggota = $request->input('id_anggota');
        $absensi = Absensi::where('id_anggota', $idAnggota)->get();

        if ($absensi->isEmpty()) {
            return response()->json([
                'id' => null,
                'checkin_status' => 0,
                'checkout_status' => 0,
            ], 404);
        }

        $checkinStatus = $absensi->where('type', 'checkin')->isNotEmpty() ? 1 : 0;
        $checkoutStatus = $absensi->where('type', 'checkout')->isNotEmpty() ? 1 : 0;

        return response()->json([
            'id' => $idAnggota,
            'checkin_status' => $checkinStatus,
            'checkout_status' => $checkoutStatus,
        ], 200);
    }

}
