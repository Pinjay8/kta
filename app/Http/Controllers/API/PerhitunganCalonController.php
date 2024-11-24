<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\PerhitunganCalon;
use App\Models\Perhitungan;
use App\Models\PengajuanPerhitunganUlang;
use App\Models\Kegiatan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PerhitunganCalonController extends Controller
{

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'id_kegiatan' => 'required|exists:kegiatans,id',
            'id_anggota' => 'required|exists:anggotas,id',
            'id_tps' => 'required|exists:tps,id',
            'id_calon' => 'required|exists:calons,id',
            'suara_calon' => 'required|integer',
            'perhitungan_ulang' => 'boolean',
        ]);

        if ($validatedData['perhitungan_ulang']) {
            PerhitunganCalon::where('id_kegiatan', $validatedData['id_kegiatan'])
                ->where('id_anggota', $validatedData['id_anggota'])
                ->where('id_tps', $validatedData['id_tps'])
                ->where('id_calon', $validatedData['id_calon'])
                ->delete();
        }

        $perhitunganCalon = PerhitunganCalon::create($validatedData);


        return response()->json([
            'status' => 'success',
            'message' => 'Data perhitungan calon berhasil ditambahkan',
            'data' => null
        ], 201);
    }

}
