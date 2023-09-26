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

    public function create(Request $request){
        $validator = Validator::make($request->all(), [
            'no_anggota' => 'required|string|max:255',
            'nama' => 'required|string|max:255',
            'no_hp' => 'required|max:255',
            'nik' => 'required',
            'tempat_lahir' => 'required|string',
            'tgl_lahir' => 'required|string',
            'jk' => 'required',
            'jabatan' => 'required|string',
            'pekerjaan' => 'required|string',
            'kelurahan' => 'required|string',
            'rt' => 'required',
            'rw' => 'required',
            // 'foto_kk' => '|min:8',
            'foto_profil' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        if ($request->input('kelurahan') == 'cabanan') {
            $kodeKelurahan = '1001';
        } else if ($request->input('kelurahan') == 'gelangan') {
            $kodeKelurahan = '1002';
        } else if ($request->input('kelurahan') == 'kemirirejo') {
            $kodeKelurahan = '1003';
        } else if ($request->input('kelurahan') == 'magelang') {
            $kodeKelurahan = '1004';
        } else if ($request->input('kelurahan') == 'panjang') {
            $kodeKelurahan = '1005';
        } else if ($request->input('kelurahan') == 'rejowinangun utara') {
            $kodeKelurahan = '1006';
        } else {
            $kodeKelurahan = '404';
        }
       
        
        $noAnggota = $kodeKelurahan.'.'. $request->input('no_anggota').'.'.$request->input('rt').$request->input('rw');
        $extension = $request->file('foto_profil')->getClientOriginalExtension();
        $imageName = $request->input('no_anggota').now()->timestamp.'.'.$extension;
        $request->file('foto_profil')->storeAs('public/FotoProfil', $imageName);


        $templatePath = public_path('asset/template/template-kta.svg');
        $svg = file_get_contents($templatePath);



        // Apply styles to the text elements using SVG attributes
        $svg = str_replace('{{NAMA}}', $request->input('nama') ,$svg);
        $svg = str_replace('{{NO_ANGGOTA}}',$noAnggota ,$svg);
        // Add more text element modifications and style changes as needed

        // Generate a unique filename for the ID card
        $filename = 'id_card_' . $noAnggota . '.svg';

        // Save the modified SVG as an image file
        Storage::disk('public/KTA')->put($filename, $svg);


        // Save the image path in the database
        $anggota = new Anggota([
            'no_anggota' => $request->input('no_anggota'),
            'nama' => $request->input('nama'),
            'no_hp' => $request->input('no_hp'),
            'nik' => $request->input('nik'),
            'tempat_lahir' => $request->input('tempat_lahir'),
            'tgl_lahir' => $request->input('tgl_lahir'),
            'jk' => $request->input('jk'),
            'jabatan' => $request->input('jabatan'),
            'pekerjaan' => $request->input('pekerjaan'),
            'kelurahan' => $request->input('kelurahan'),
            'rt' => $request->input('rt'),
            'rw' => $request->input('rw'),
            'foto_profil' => $imageName, // Save the image file name
            'kta' => $filename,
            'password' => bcrypt($request->input('nik'))
        ]);

        $anggota->save();
        return response()->json([
            'success' => true,
            'message' => 'data berhasil ditambahkan',
        ]);
    }

    public function info(){
        phpinfo();
    }

    public function delete(){

    }
}
