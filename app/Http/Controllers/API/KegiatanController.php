<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Kegiatan;
use App\Models\Anggota;
use App\Models\Absensi;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
use Auth;

class KegiatanController extends Controller
{
    //
    public function allList(){
        $userId = auth()->user()->no_anggota;
        $kegiatan = Absensi::with('kegiatan')->where('id_anggota', $userId)->get();
        return response()->json([
            'status' => true,
            'message' => 'success',
            'data' => $kegiatan,
        ],200);
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

        $anggota = Anggota::all();
        foreach ($anggota as $user) {
            $absensi = new Absensi();
            $absensi->id_anggota = $user->no_anggota;
            $absensi->id_kegiatan = $kegiatan->id; // Menggunakan ID kegiatan yang baru saja ditambahkan
            $absensi->status_absensi = 0; // Anda dapat mengatur absensi_anggota sesuai kebutuhan
            $absensi->save();
        }

        return response()->json([
            'status' => true,
            'message' => 'data berhasil ditambahkan',
            'data' => null,
        ], 200);
    }

        //API Kegiatan Hari Ini
        public function now(Request $request){
            $tgl_sekarang = Carbon::now()->format('d/m/Y');

            $kegiatan = Kegiatan::where('tanggal', $tgl_sekarang)->get();
            return response()->json([
                'status' => true,
                'message' => 'success',
                'data' => $kegiatan,
            ], 200);
        }
}
