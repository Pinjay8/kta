<?php

namespace App\Http\Controllers;

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
    public function read(){

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


        $extension = $request->file('foto_profil')->getClientOriginalExtension();
        $newName = $request->input('no_anggota').now()->timestamp.'.'.$extension;
        $img = Image::make(public_path('asset/template/template_kta.png'), ['driver' => 'imagick']);

        $font_semibold = public_path('asset/font/poppins/Poppins-Bold.ttf');
        $font_regular = public_path('asset/font/poppins/Poppins-Regular.ttf');

        $imgprofil= Image::make($request->file('foto_profil'));

        //rotate image when the ratio is 3:4
        $widthbefore = $imgprofil->width();
        $heightbefore = $imgprofil->height();

        if ($widthbefore/$heightbefore == 4/3) {
            $imgprofil->rotate(-90);
        }
        $width = $imgprofil->width();
        $height = $imgprofil->height();


        if ($width / $height == 3 / 4) {
            $imgprofil->resize(182.74, 243.65 , function ($constraint) {
                $constraint->upsize();
                $constraint->aspectRatio();
            });    
        } 
        else {
        // Calculate the new width and height of the cropped image
        $newWidth = round(4 * $height / 3);
        $newHeight = round(3 * $width / 4);

        if ($newWidth > $width) {
            // Crop the image from the top and bottom
            $y = floor(($height - $newHeight) / 2);
            $imgprofil->crop($newHeight, $width, 0, $y);
        } else {
            // Crop the image from the left and right
            $x = floor(($width - $newWidth) / 2);
            $imgprofil->crop($height, $newWidth, $x, 0);
        }
        $imgprofil->resize(182.74, 243.65 , function ($constraint) {
            $constraint->upsize();
            $constraint->aspectRatio();
        });
        }

        $TTL = ('TTL : '.ucwords($request->input('tempat_lahir')). ', '. $request->input('tgl_lahir'));
        $detailAlamat = wordwrap($request->input('kelurahan'). ' RT'.$request->input('rt'). ' RW'.$request->input('rw'), 50, "\n", true);
        $alamat = ('Alamat : '.$detailAlamat);
        
        $img->insert($imgprofil, 'top-left', 98 , 226 );
        $img->text(ucwords($request->input('nama')), 344, 235, function($font) use ($font_semibold) {
            $font->file($font_semibold);
            $font->size(42);
            $font->color('#000');
            $font->align('left');
            $font->valign('top');
        });
        $img->text(ucwords($request->input('jabatan')), 344, 283, function($font) use ($font_semibold) {
            $font->file($font_semibold);
            $font->size(28);
            $font->color('#D51F27');
            $font->align('left');
            $font->valign('top');
        });
        $img->text($request->input('no_anggota'), 344, 335 , function($font) use ($font_semibold) {
            $font->file($font_semibold);
            $font->size(53);
            $font->color('#000');
            $font->align('left');
            $font->valign('top');
        });
        $img->text($TTL, 344, 410 , function($font) use ($font_regular) {
            $font->file($font_regular);
            $font->size(19);
            $font->color('#000');
            $font->align('left');
            $font->valign('top');
        });
        $img->text($alamat, 344, 438 , function($font) use ($font_regular) {
            $font->file($font_regular);
            $font->size(19);
            $font->color('#000');
            $font->align('left');
            $font->valign('top');
        });

        $ktaName = 'kta-'.$request->input('no_anggota').$request->input('rw').$request->input('jk').now()->timestamp.'.png';
        Storage::disk('public')->put('asset/kta/'.$ktaName, $img->encode());

        // Store the image in the storage/app/public folder and get its path
        if ($request->hasFile('foto_profil')) {
            $image = $request->file('foto_profil');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('uploads'), $imageName);
        }
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
            'foto_kk' => $ktaName,
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
