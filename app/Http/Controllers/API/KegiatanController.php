<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Kegiatan;

class KegiatanController extends Controller
{
    //
    public function main(){
        $kegiatan = Kegiatan::all();
        return response()->json([
            'message' => 'success',
            'data' => $kegiatan
        ]);
    }

    public function akandatang(){
        $kegiatan = Kegiatan::where('status', 0)->get();
        return response()->json([
            'message' => 'success',
            'data' => $kegiatan
        ]);
    }
    public function berlangsung(){
        $kegiatan = Kegiatan::where('status', 1)->get();
        return response()->json([
            'message' => 'success',
            'data' => $kegiatan
        ]);
    }
    public function selesai(){
        $kegiatan = Kegiatan::where('status', 2)->get();
        return response()->json([
            'message' => 'success',
            'data' => $kegiatan
        ]);
    }
}
