<?php

namespace App\Http\Controllers;


use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Gd\Shapes\RoundedRectangleShape;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Input;
use Intervention\Image\ImageManagerStatic as Image;
use App\Models\Anggota;
use Imagick;
use DB;
use GD;

class AnggotaController extends Controller
{
    //
    public function show(){
        $anggota = Anggota::all();

        return Inertia::render('AnggotaPage', [
            'data' => $anggota,
        ]);
    }

    public function create(Request $request)
    {


        $request->validate([
            'nama' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'nik' => 'required|integer',
            'ttl' => 'required|string',
            'jk' => 'required',
            'jabatan' => 'required|string',
            'pekerjaan' => 'required|string',
            'no_anggota' => 'required',
            'password' => 'required|string|min:8'
        ]);



        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $anggota = Anggota::create($input);

        $success['token'] = $anggota->createToken('auth_token')->plainTextToken;
        $success['nama'] = $anggota->nama;

        return response()->json([
            'success' => true,
            'data' => $success,
            'token_type' => 'Bearer'
        ]);
    }

    public function info(){
        phpinfo();
    }

    public function delete(){

    }
}
