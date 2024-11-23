<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Perhitungan;
use Illuminate\Http\Request;

class PerhitunganController extends Controller
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
            'id_calon' => 'required|exists:calons,id',
            'id_tps' => 'required|exists:tps,id',
            'jumlah_dpt' => 'required|integer',
            'pemilih_hadir' => 'required|integer',
            'suara_sah' => 'required|integer',
            'suara_tidak_sah' => 'required|integer',
            'gambar_selfie' => 'nullable|image',
            'gambar_c1_1' => 'nullable|image',
            'gambar_c1_2' => 'nullable|image',
            'gambar_opsional' => 'nullable|image',
            'laporan' => 'nullable|string',
            'gambar_laporan' => 'nullable|image',
            'perhitungan_ulang' => 'nullable|boolean',
        ]);

        // Handle file uploads
        $imageFields = ['gambar_selfie', 'gambar_c1_1', 'gambar_c1_2', 'gambar_opsional', 'gambar_laporan'];
        foreach ($imageFields as $field) {
            if ($request->hasFile($field)) {
                $validatedData[$field] = $request->file($field)->store('images', 'public');
            }
        }

        // Create a new Perhitungan record
        $perhitungan = Perhitungan::create($validatedData);

        // Return a response
        return response()->json([
            'status' => 'success',
            'message' => 'Perhitungan created successfully',
            'data' => null
        ], 201);
    }
}
