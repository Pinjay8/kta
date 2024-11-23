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
use App\Models\Calon;
use App\Models\PengajuanPerhitunganUlang;

class KegiatanController extends Controller
{    

    public function show() {
        $kegiatan = Kegiatan::all();
        $response = $kegiatan->map(function ($item) {
            $calonData = Calon::where('status', $item->jenis_pemilihan)->get()->map(function ($calon) {
                return [
                    'id' => (string) $calon->id ?? '',
                    'nama' => $calon->nama ?? '', 
                    'no_urut' =>(string) $calon->no_urut ?? '', 
                ];
            });

            $perhitunganUlang = PengajuanPerhitunganUlang::where('id_kegiatan', $item->id)
                ->where('is_accepted', 1)
                ->exists() ? '1' : '0';

            return [
                'id' => (string) $item->id ?? '',
                'nama_kegiatan' => $item->nama_kegiatan ?? '',
                'status' =>(string) $item->status ?? '',
                'perhitungan_ulang' => $perhitunganUlang,
                'calon' => $calonData ?? '',
                'jenis_pemilihan' => $item->jenis_pemilihan ?? '',
            ];
        });
        return response()->json([
            'status' => true,
            'message' => 'success',
            'data' => $response,
        ], 200);
    }

}
