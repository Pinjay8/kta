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
            'id_tps' => 'required|exists:tps,id',
            'gambar_selfie' => 'required|image',
            'gambar_c1_1' => 'required|image',
            'gambar_c1_2' => 'required|image',
            'perhitungan_ulang' => 'boolean',
        ]);

        if ($validatedData['perhitungan_ulang']) {
            Perhitungan::where('id_kegiatan', $validatedData['id_kegiatan'])
                ->where('id_anggota', $validatedData['id_anggota'])
                ->where('id_tps', $validatedData['id_tps'])
                ->delete();
        }

        $imageFields = ['gambar_selfie', 'gambar_c1_1', 'gambar_c1_2'];
        foreach ($imageFields as $field) {
            if ($request->hasFile($field)) {
                $validatedData[$field] = $request->file($field)->store('images', 'public');
            }
        }

        $perhitungan = Perhitungan::create($validatedData);

        return response()->json([
            'status' => 'success',
            'message' => 'Data perhitungan berhasil ditambahkan',
            'data' => null
        ], 201);
    }
}
