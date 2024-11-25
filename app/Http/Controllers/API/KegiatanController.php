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
use App\Models\Perhitungan;
use App\Models\PerhitunganCalon;
use App\Models\PengajuanPerhitunganUlang;

class KegiatanController extends Controller
{

    public function index()
    {
        $kegiatan = Kegiatan::all();
        $response = $kegiatan->map(function ($item) {
            $perhitunganUlang = PengajuanPerhitunganUlang::where('id_kegiatan', $item->id)
                ->where('is_accepted', 1)
                ->exists() ? '1' : '0';

            return [
                'id' => (string) $item->id ?? '',
                'nama_kegiatan' => $item->nama_kegiatan ?? '',
                'status' => (string) $item->status ?? '',
                'perhitungan_ulang' => $perhitunganUlang,
                'jenis_pemilihan' => $item->jenis_pemilihan ?? '',
            ];
        });
        return response()->json([
            'status' => 'success',
            'message' => 'Data Kegiatan berhasil diambil',
            'data' => $response,
        ], 200);
    }



    public function show(Request $request)
    {
        $type = $request->input('type');
        $kegiatan = $request->input('id_kegiatan');

        $calon1 = Calon::where('no_urut', 1)->where('status', $type)->first();
        $calon2 = Calon::where('no_urut', 2)->where('status', $type)->first();

        $anggota = Auth::user();

        $perhitunganUlang = PengajuanPerhitunganUlang::where('id_kegiatan', $kegiatan)
            ->where('id_anggota', $anggota->id)
            ->where('is_accepted', 1)
            ->exists() ? 1 : 0;

        $kegiatanName = Kegiatan::find($kegiatan)->nama_kegiatan ?? '';



        $calon1status = PerhitunganCalon::where('id_calon', $calon1->id)
            ->where('id_anggota', $anggota->id)
            ->where('id_tps', $anggota->id_tps)
            ->exists() ? 0 : 1;

        $calon2status = PerhitunganCalon::where('id_calon', $calon2->id)
            ->where('id_anggota', $anggota->id)
            ->where('id_tps', $anggota->id_tps)
            ->exists() ? 0 : 1;

        $status = Perhitungan::where('id_kegiatan', $kegiatan)
            ->where('id_anggota', $anggota->id)
            ->where('id_tps', $anggota->id_tps)
            ->exists() ? 0 : 1;

        $response = [
            'calon_1' =>  [
                'id' => (string) $calon1->id ?? '',
                'nama' => (string)$calon1->nama ?? '',
                'no_urut' => (string)$calon1->no_urut ?? '',
                'status' => (string) $calon1status ?? '',
                'perhitungan_ulang' => (string) $perhitunganUlang
            ],
            'calon_2' =>  [
                'id' => (string)$calon2->id ?? '',
                'nama' => (string)$calon2->nama ?? '',
                'no_urut' => (string)$calon2->no_urut ?? '',
                'status' => (string)$calon2status ?? '',
                'perhitungan_ulang' => (string)$perhitunganUlang
            ],
            'total' => [
                'nama' => (string)$kegiatanName,
                'status' => (string)$status,
                'perhitungan_ulang' => (string)$perhitunganUlang
            ]
        ];

        return response()->json([
            'status' => 'success',
            'message' => 'Data Kegiatan berhasil diambil',
            'data' => $response,
        ], 200);
    }
}
