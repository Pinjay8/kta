<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Anggota;
use Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\Tps;



class AuthController extends Controller
{
    //
    
    public function login (Request $request){
        //CEK NO HP & PASS
        if (!Auth::guard('anggota')->attempt($request->only('no_hp', 'password'))) {
            return response()->json([
                'status' => 'failed',
                'message' => 'Unauthorized',
                'data' => null,
            ], 401);
        }

        if(Auth::guard('anggota')->user()->tokens()){
            Auth::guard('anggota')->user()->tokens()->delete();
        }

        $user = Anggota::where('no_hp', $request->no_hp)->firstOrFail();
        //GENERATE TOKEN SETELAH LOGIN
        $token = $user->createToken('auth_token')->plainTextToken;

        $userdata = Auth::guard('anggota')->user();
        $detailnama = $userdata->nama;
        $detailnohp = $userdata->no_hp;
        $detailid = $userdata->no_anggota;

        return response()->json([
            'status' => 'success',
            'message' => 'Login Berhasil',
            'data' => [
                'token' => $token,
            ]
        ], 200);
    }

    public function logout(){
        Auth::user()->tokens()->delete();
        return response()->json([
            'status' => 'success',
            'message' => 'logout success',
            'data' => null,
        ], 200);
    }

    public function show(){
        if (Auth::check()) {
            $anggota = Auth::user();
            $tps = $anggota->id_tps ? Tps::find($anggota->id_tps) : null;

            return response()->json([
                'status' => 'success',
                'message' => 'Data anggota berhasil diambil',
                'data' => [
                    'anggota' => [
                        'id' => (string) $anggota->id ?? '',
                        'no_anggota' =>(string) $anggota->no_anggota ?? '',
                        'nama' => $anggota->nama ?? '',
                        'no_hp' => $anggota->no_hp ?? '',
                        'nik' => (string)$anggota->nik ?? '',
                        'alamat' => $anggota->alamat ?? '',
                        'kecamatan' => $anggota->kecamatan ?? '',
                        'kelurahan' => $anggota->kelurahan ?? '',
                        'rt' => $anggota->rt ?? '',
                        'rw' => $anggota->rw ?? '',
                        'no_cs' => '+6285640555861'
                    ],
                    'tps' =>  [
                        'id' => $tps->id ?? '',
                        'no_tps' => $tps->no_tps ?? '',
                        'kelurahan' => $tps->kelurahan ?? '',
                        'kecamatan' => $tps->kecamatan ?? '',
                        'rw' => $tps->rw ?? '',
                        'dpt' => (string)$tps->dpt ?? '',
                        'laki_laki' => (string)$tps->laki_laki ?? '',
                        'perempuan' => (string)$tps->perempuan ?? '',
                    ]
                ]
            ], 200);
        } else {
            return response()->json([
                'status' => 'failed',
                'message' => 'Data tidak ditemukan',
                'data' => [
                    'anggota' => [
                        'no_anggota' => '',
                        'nama' => '',
                        'no_hp' => '',
                        'nik' => '',
                        'id_tps' => '',
                        'alamat' => '',
                        'kecamatan' => '',
                        'kelurahan' => '',
                        'rt' => '',
                        'rw' => '',
                    ],
                    'tps' => [
                        'no_tps' => '',
                        'alamat' => '',
                        'kelurahan' => '',
                        'rt' => '',
                        'rw' => '',
                        'kecamatan' => '',
                        'status' => '',
                  ]
                ]
            ], 200);    
        }
    }

}
