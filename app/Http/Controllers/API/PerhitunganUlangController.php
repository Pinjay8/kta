<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\PengajuanPerhitunganUlang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PerhitunganUlangController extends Controller
{

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_kegiatan' => 'required|array',
            'id_anggota' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        foreach ($request->id_kegiatan as $id_kegiatan) {
            PengajuanPerhitunganUlang::create([
                'id_kegiatan' => $id_kegiatan,
                'id_anggota' => $request->id_anggota,
                'is_accepted' => null, 
                'reason' => '',
            ]);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Pengajuan perhitungan ulang berhasil diajukan',
            'data' => null,
        ], 200);
    }


}
