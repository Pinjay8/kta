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
        ]);

        // Menggunakan import untuk memproses file Excel
        Excel::import(new TpsImport, $request->file('file'));

        return redirect()->route('tps');
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'no_tps' => 'required',
            'kelurahan' => 'required',
            'kecamatan' => 'required',
        ]);

        $tps = new Tps([
            'no_tps' => $request->input('no_tps'),
            'alamat' => $request->input('alamat'),
            'kelurahan' => $request->input('kelurahan'),
            'rt' => $request->input('rt'),
            'rw' => $request->input('rw'),
            'kecamatan' => $request->input('kecamatan'),
        ]);

        $tps->save();

        return redirect()->back();
    }

    public function show()
    {
        $listTps = Tps::orderBy('id', 'desc')->get();
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
        ]);

        $Tps = Tps::find($id);

        $Tps->update([
            'no_tps' => $request->input('no_tps'),
            'kelurahan' => $request->input('kelurahan'),
            'kecamatan' => $request->input('kecamatan'),
        ]);

        return redirect()->back();
    }

    public function delete($id)
    {

        $tps  = Tps::where('id', $id)->delete();
    }
}
