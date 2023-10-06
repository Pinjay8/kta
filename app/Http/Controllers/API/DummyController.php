<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DummyController extends Controller
{
    //

    public function caleg() {
        return response()->json([
            'status' => true,
            'message' => 'success',
            'data' => [
                'id' => '1',
                'nama_dapil' => 'HJ TENNY JULIAWATY, S.E.,M.Si',
                'dapil' => '1',
                'no_urut' => '1',
            ]
        ],200);
    }
    
    public function kegiatan() {
        return response()->json([
            'status' => true,
            'message' => 'success',
            'data' => [
                'nama_kegiatan' => 'Absensi Relawan Perhitungan Suara',
                'dapil' => '1',
                'no_urut' => '2',
            ],
        ],200);
    }
        
}
