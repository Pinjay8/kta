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
    public function show()
    {
        $listkegiatan = Kegiatan::orderBy('id', 'desc')->get();
        return Inertia::render('KegiatanPage', [
            'data' => $listkegiatan,
        ]);
    }

    public function ubahstatus(Request $request, $id)
    {
        // dd($request);
        $kegiatan = Kegiatan::find($id);

        $kegiatan->status = $request->status;
        $kegiatan->absensi = $request->absensi;

        $kegiatan->touch();
        $kegiatan->save;
    }


    public function create(Request $request)
    {
        $request->validate(
            [
                'nama_kegiatan' => 'required',
                'jam' => 'required',
                'tanggal' => 'required',
                'status' => 'required',
                'jenis_pemilihan' => 'required',
            ],
            [
                'nama_kegiatan.required' => 'Nama Kegiatan tidak boleh kosong',
                'jam.required' => 'Jam tidak boleh kosong',
                'tanggal.required' => 'Tanggal tidak boleh kosong',
                'status.required' => 'Status tidak boleh kosong',
                'jenis_pemilihan.required' => 'Jenis Pemilihan tidak boleh kosong',
            ]
        );

        // $absensi = '0';
        // $status = '0';

        Kegiatan::create([
            'nama_kegiatan' => $request->input('nama_kegiatan'),
            'jam' => $request->input('jam'),
            'tanggal' => $request->input('tanggal'),
            'status' => $request->input('status'),
            'jenis_pemilihan' => $request->input('jenis_pemilihan'),
        ]);



        // $anggota = Anggota::all();
        // foreach ($anggota as $user) {
        //     $absensi = new Absensi();
        //     $absensi->id_anggota = $user->id;
        //     $absensi->id_kegiatan = $kegiatan->id; // Menggunakan ID kegiatan yang baru saja ditambahkan
        //     $absensi->status_absensi = 0; // Anda dapat mengatur absensi_anggota sesuai kebutuhan
        //     $absensi->save();
        // }


        return redirect()->back();
    }

    public function update(Request $request, $id)
    {
        // dd($request);
        $request->validate([
            'nama_kegiatan' => 'required',
            'jam' => 'required',
            'tanggal' => 'required',
            'status' => 'required',
            'jenis_pemilihan' => 'required',
        ]);

        // Find the kegiatan by ID
        $kegiatan = Kegiatan::findOrFail($id);

        // Update kegiatan data with the validated input
        $kegiatan->update([
            'nama_kegiatan' => $request->input('nama_kegiatan'),
            'jam' => $request->input('jam'),
            'tanggal' => $request->input('tanggal'),
            'status' => $request->input('status'),
            'jenis_pemilihan' => $request->input('jenis_pemilihan'),
        ]);


        // Redirect back to the kegiatan edit page with a success message
        return redirect()->back();
    }

    public function delete($id)
    {
        $kegiatan = Kegiatan::where('id', $id)->delete();
        // $absensi = Absensi::where('id_kegiatan', $id)->delete();
    }
}
