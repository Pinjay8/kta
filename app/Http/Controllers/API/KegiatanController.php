<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Kegiatan;
use Illuminate\Support\Facades\Validator;


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

    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'nama_kegiatan' => 'required',
            'lokasi' => 'required',
            'jam' => 'required',
            'tanggal' => 'required',
            'absensi' => 'required',
            'status' => 'required',
            'pic' => 'required',
            'notulensi' => 'required',
            
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $kegiatan = new Kegiatan([
            'nama_kegiatan' => $request->input('nama_kegiatan'),
            'lokasi' => $request->input('lokasi'),
            'jam' => $request->input('jam'),
            'tanggal' => $request->input('tanggal'),
            'absensi' => $request->input('absensi'),
            'status' => $request->input('status'),
            'pic' => $request->input('pic'),
            'notulensi' => $request->input('notulensi'),
        ]);

        $kegiatan->save();

        return response()->json([
            'success' => true,
            'message' => 'data berhasil ditambahkan',
        ]);
    }
}
