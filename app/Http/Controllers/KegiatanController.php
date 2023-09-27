<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kegiatan;
use Inertia\Inertia;


class KegiatanController extends Controller
{
    //
    public function show(){
        $listkegiatan = Kegiatan::all();
        return Inertia::render('KegiatanPage', [
            'data' => $listkegiatan,
        ]);
    }


    public function tambah(){
        return Inertia::render('Formulir/TambahKegiatan');
    }
}
