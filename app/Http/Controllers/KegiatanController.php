<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kegiatan;
use App\Models\Anggota;
use App\Models\Absensi;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;


class KegiatanController extends Controller
{
    //
    public function show(){
        $listkegiatan = Kegiatan::orderBy('created_at', 'desc')->get();
        return Inertia::render('KegiatanPage', [
            'data' => $listkegiatan,
        ]);
    }




    public function ubahstatus(Request $request, $id){
        // dd($request);
        $kegiatan = Kegiatan::find($id);
        
        $kegiatan->status = $request->status;
        $kegiatan->absensi = $request->absensi;

        $kegiatan->touch();
        $kegiatan->save;



    }


    public function create(Request $request){


        $validator = Validator::make($request->all(), [
            'nama' => 'required',
            'lokasi' => 'required',
            'jam' => 'required',
            'tanggal' => 'required',
            'status' => 'required',
            'pic' => 'required',
            
        ]);

        if ($request->input('notulensi') == null) {
            $notulensi = '-';
        } else {
            $notulensi = $request->input('notulensi');
        }

        $absensi = '0';
        $status = '0';

        $kegiatan = new Kegiatan([
            'nama_kegiatan' => $request->input('nama'),
            'lokasi' => $request->input('lokasi'),
            'jam' => $request->input('jam'),
            'tanggal' => $request->input('tanggal'),
            'absensi' => $absensi,
            'status' => $status,
            'pic' => $request->input('pic'),
            'notulensi' => $notulensi,
        ]);

        $kegiatan->save();

        $anggota = Anggota::all();
        foreach ($anggota as $user) {
            $absensi = new Absensi();
            $absensi->id_anggota = $user->id;
            $absensi->id_kegiatan = $kegiatan->id; // Menggunakan ID kegiatan yang baru saja ditambahkan
            $absensi->status_absensi = 0; // Anda dapat mengatur absensi_anggota sesuai kebutuhan
            $absensi->save();
        }


        return redirect()->back();
    }

    public function update(Request $request, $id){
// dd($request);
        $request->validate([
            'nama' => 'required',
            'lokasi' => 'required',
            'jam' => 'required',
            'tanggal' => 'required|date',
            'pic' => 'required',
            // 'notulensi' => 'required',
        ]);

        // Find the kegiatan by ID
        $kegiatan = Kegiatan::findOrFail($id);

        // Update kegiatan data with the validated input
        $kegiatan->update([
            'nama_kegiatan' => $request->input('nama'),
            'lokasi' => $request->input('lokasi'),
            'jam' => $request->input('jam'),
            'tanggal' => $request->input('tanggal'),
            'pic' => $request->input('pic'),
            'notulensi' => $request->input('notulensi'),
        ]);


        // Redirect back to the kegiatan edit page with a success message
        return redirect()->back();
    }

    public function delete($id){
        $kegiatan = Kegiatan::where('id', $id)->delete();
        $absensi = Absensi::where('id_kegiatan', $id)->delete();
        

    }
}
