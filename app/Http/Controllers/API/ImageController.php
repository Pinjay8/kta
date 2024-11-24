<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ImageController extends Controller
{

    /**
     * Store a newly created resource in storage.
     */

    public function store(Request $request)
    {
        $request->validate([
            'file_gambar' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'nama_folder' => 'required|string'
        ]);

        if ($request->hasFile('file_gambar')) {
            $image = $request->file('file_gambar');
            $path = $image->store($request->nama_folder, 'public'); 

            return response()->json([
                'status' => 'success',
                'message' => 'Gambar berhasil diupload',
                'data' => [
                    'image_path' => $path,
                ],
            ], 200);        
        }

        return response()->json([
            'status' => 'failed',
            'message' => 'Gambar gagal diupload',
            'data' => null,
        ], 401);    
    }
}
