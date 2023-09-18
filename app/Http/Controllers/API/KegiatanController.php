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
}
