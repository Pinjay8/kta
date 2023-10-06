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
            [
                'id' => '1',
                'nama_dapil' => 'HJ TENNY JULIAWATY, S.E.,M.Si',
                'dapil' => '1',
                'no_urut' => '1',
            ],
            [
                'id' => '2',
                'nama_dapil' => 'HASNA RAKHMATIKA NURUL AZMI',
                'dapil' => '1',
                'no_urut' => '2',
            ],
            [
                'id' => '3',
                'nama_dapil' => 'SINTHYA DEWI',
                'dapil' => '1',
                'no_urut' => '3',
            ],
            [
                'id' => '4',
                'nama_dapil' => 'GINANJAR EKA NUGRAHA',
                'dapil' => '1',
                'no_urut' => '4',
            ],
            [
                'id' => '5',
                'nama_dapil' => 'SUGENG RIYATNO',
                'dapil' => '1',
                'no_urut' => '5',
            ],
            [
                'id' => '6',
                'nama_dapil' => 'HARLINDA S.H',
                'dapil' => '1',
                'no_urut' => '6',
            ],
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
