<?php

namespace App\Http\Controllers;

use App\Models\Tps;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\TpsImport;

class TpsController extends Controller
{

    // Fungsi untuk mengimpor file Excel
    public function importExcel(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:xlsx,xls',
            [
                'file.required' => 'File tidak boleh kosong',
                'file.mimes' => 'File harus berformat xlsx atau xls',
            ]
        ]);

        // Menggunakan import untuk memproses file Excel
        Excel::import(new TpsImport, $request->file('file'));

        return redirect()->route('tps');
    }

    public function create(Request $request)
    {
        $request->validate(
            [
                'no_tps' => 'required',
                'kelurahan' => 'required',
                'kecamatan' => 'required',
                "rw" => 'required',
                "laki_laki" => 'required',
                "perempuan" => 'required',
                "dpt" => 'required',
            ],

            [
                'no_tps.required' => 'No TPS tidak boleh kosong',
                'kelurahan.required' => 'Kelurahan tidak boleh kosong',
                'kecamatan.required' => 'Kecamatan tidak boleh kosong',
                'rw.required' => 'RW tidak boleh kosong',
                'laki_laki.required' => 'Laki-laki tidak boleh kosong',
                'perempuan.required' => 'Perempuan tidak boleh kosong',
                'dpt.required' => 'DPT tidak boleh kosong',
            ]
        );

        Tps::create([
            'no_tps' => $request->input('no_tps'),
            'alamat' => $request->input('alamat'),
            'kelurahan' => $request->input('kelurahan'),
            'kecamatan' => $request->input('kecamatan'),
            'rw' => $request->input('rw'),
            'laki_laki' => $request->input('laki_laki'),
            'perempuan' => $request->input('perempuan'),
            'dpt' => $request->input('dpt'),

        ]);


        return redirect()->back();
    }

    public function show()
    {
        $listTps = Tps::orderBy('id', 'desc')->where('deleted_at', null)->get();
        return Inertia::render('TpsPage', [
            'data' => $listTps,
        ]);
    }

    public function update(Request $request,  $id)
    {

        $request->validate([
            'no_tps' => 'required',
            'kelurahan' => 'required',
            'kecamatan' => 'required',
            'rw' => 'required',
            'laki_laki' => 'required',
            'perempuan' => 'required',
            'dpt' => 'required',
        ]);

        $Tps = Tps::find($id);

        $Tps->update([
            'no_tps' => $request->input('no_tps'),
            'kelurahan' => $request->input('kelurahan'),
            'kecamatan' => $request->input('kecamatan'),
            'rw' => $request->input('rw'),
            'laki_laki' => $request->input('laki_laki'),
            'perempuan' => $request->input('perempuan'),
            'dpt' => $request->input('dpt'),
        ]);

        return redirect()->back();
    }

    public function delete($id)
    {

        $tps  = Tps::where('id', $id)->delete();
    }
}
