<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Absensi;
use Auth;
use Illuminate\Support\Facades\Validator;


class AbsensiController extends Controller
{
    //

    public function checkin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_anggota' => 'required',
            'latitude' => 'required|string',
            'longitude' => 'required|string',
            'tps_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'selfie_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
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
            'status' => 1,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Absensi berhasil dibuat',
            'data' => null,
        ], 201);
    }

    public function checkout(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_anggota' => 'required',
            'latitude' => 'required|string',
            'longitude' => 'required|string',
            'tps_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'selfie_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'failed',
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
            'status' => 1,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Absensi berhasil dibuat',
            'data' => null,
        ], 201);
    }

    public function show(Request $request){
        $anggota = Auth::user();
        $absensi = Absensi::where('id_anggota', $anggota->id)->get();

      
        $checkinStatus = $absensi->where('type', 'checkin')->isNotEmpty() ? '1' : '0';
        $checkoutStatus = $absensi->where('type', 'checkout')->isNotEmpty() ? '1' : '0';

        return response()->json([
            'status' => 'success',
                'message' => 'Data status absensi berhasil diambil',
                'data' => [
                    'id_anggota' => (string)$anggota->id,
                    'checkin_status' => $checkinStatus,
                    'checkout_status' => $checkoutStatus,
                ]
        ], 200);
    }

}
