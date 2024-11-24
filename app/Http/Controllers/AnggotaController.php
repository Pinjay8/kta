<?php

namespace App\Http\Controllers;


use App\Imports\AnggotaImport;
use App\Models\Anggota;
use App\Models\Tps;
use DB;
use GD;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Imagick;
use Inertia\Inertia;
use Intervention\Image\Gd\Shapes\RoundedRectangleShape;
use Intervention\Image\ImageManagerStatic as Image;
use Maatwebsite\Excel\Facades\Excel;

class AnggotaController extends Controller
{
    public function importExcelAnggota(Request $request)
    {
        $request->validate(
            [
                'file' => 'required|mimes:xlsx,xls',
            ],
            [
                'file.required' => 'File tidak boleh kosong',
                'file.mimes' => 'File harus berformat xlsx atau xls',
            ]
        );

        // Menggunakan import untuk memproses file Excel
        Excel::import(new AnggotaImport, $request->file('file'));

        return redirect()->route('anggota');
    }


    public function show()
    {
        $anggota = Anggota::orderBy('id', 'desc')->get();

        return Inertia::render('AnggotaPage', [
            'data' => $anggota,
        ]);
    }

    public function create(Request $request)
    {

        $request->validate(
            [
                'no_anggota' => 'required',
                'nama' => 'required',
                'no_hp' => 'required',
                'nik' => 'required',
                'id_tps' => 'required',
                'alamat' => 'required',
                'kecamatan' => 'required',
                'kelurahan' => 'required',
            ],
            [
                'no_anggota.required' => 'No Anggota tidak boleh kosong',
                'nama.required' => 'Nama tidak boleh kosong',
                'no_hp.required' => 'No HP tidak boleh kosong',
                'nik.required' => 'NIK tidak boleh kosong',
                'id_tps.required' => 'TPS tidak boleh kosong',
                'alamat.required' => 'Alamat tidak boleh kosong',
                'kecamatan.required' => 'Kecamatan tidak boleh kosong',
                'kelurahan.required' => 'Kelurahan tidak boleh kosong',
                'status.required' => 'Status tidak boleh kosong',
            ]
        );



        $input = $request->all();
        $anggota = Anggota::create($input);

        // return Inertia::render('ModalTambahAnggota', [
        //     'successMessage' => 'Anggota berhasil ditambahkan!',
        //     'tpsOptions' => Tps::all()->map(fn($tps) => [
        //         'value' => $tps->id,
        //         'label' => $tps->name,
        //     ]),
        // ]);
    }

    public function info()
    {
        phpinfo();
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'no_anggota' => 'required',
            'nama' => 'required',
            'no_hp' => 'required',
            'nik' => 'required',
            'id_tps' => 'required',
            'alamat' => 'required',
            'kecamatan' => 'required',
            'kelurahan' => 'required',
        ]);

        $anggota = Anggota::find($id);

        // $input = $request->all();
        // $input['password'] = bcrypt($input['password']);
        // $anggota->update($input);

        $anggota->update($request->all());

        return redirect()->back();
    }

    public function delete($id)
    {
        $calon = Anggota::where('id', $id)->delete();
    }
}
