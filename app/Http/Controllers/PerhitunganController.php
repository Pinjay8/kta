<?php

namespace App\Http\Controllers;

use App\Models\PengajuanPerhitunganUlang;
use App\Models\Perhitungan;
use App\Models\PerhitunganCalon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PerhitunganController extends Controller
{

    /**
     * Display the specified resource.
     */
    public function show()
    {
        $perhitunganUlang = PengajuanPerhitunganUlang::with('anggota.tps', 'kegiatan')->orderBy('id', 'desc')->get();

        // Mengubah id_kegiatan menjadi nama kegiatan
        $perhitunganUlang->transform(function ($item) {
            $item->id_kegiatan = $item->kegiatan->nama_kegiatan; // Asumsi kolom di tabel kegiatan adalah `nama_kegiatan`
            $item->id_anggota = $item->anggota->nama; // Asumsi kolom di tabel anggota adalah `nama`
            $item->tps_name = $item->anggota->tps->no_tps ?? 'Tidak ada TPS';
            return $item;
        });

        return Inertia::render('PerhitunganUlangPage', [
            'data' => $perhitunganUlang,
        ]);
    }


    public function update(Request $request, $id)
    {
        $request->validate([
            'is_accepted' => 'required|boolean',
        ]);

        // Cari data berdasarkan ID
        $perhitunganUlang = PengajuanPerhitunganUlang::findOrFail($id);


        // Update is_accepted
        $perhitunganUlang->is_accepted = $request->is_accepted;
        $perhitunganUlang->save();

        if ($request->is_accepted == 1) {
            // Cari data Perhitungan yang berhubungan dengan Anggota yang terkait
            $perhitungan = Perhitungan::where('id_anggota', $perhitunganUlang->id_anggota)->first();
            $perhitunganCalon = PerhitunganCalon::where('id_kegiatan', $perhitunganUlang->id_kegiatan)->get();
            // dd($perhitunganCalon);
            if ($perhitungan) {
                // Update kolom perhitungan_ulang di tabel Perhitungan
                $perhitungan->perhitungan_ulang = 1; // Atur nilai sesuai kebutuhan
                $perhitungan->save();
            }

            if ($perhitunganCalon) {
                // Update kolom perhitungan_ulang di tabel PerhitunganCalon
                $perhitunganCalon->each(function ($item) {
                    $item->perhitungan_ulang = 1; // Atur nilai sesuai kebutuhan
                    $item->save();
                });
            }
        } else {
            // Cari data Perhitungan yang berhubungan dengan Anggota yang terkait
            $perhitungan = Perhitungan::where('id_anggota', $perhitunganUlang->id_anggota)->first();
            $perhitunganCalon = PerhitunganCalon::where('id_kegiatan', $perhitunganUlang->id_kegiatan)->get();

            if ($perhitungan) {
                // Update kolom perhitungan_ulang di tabel Perhitungan
                $perhitungan->perhitungan_ulang = 0; // Atur nilai sesuai kebutuhan
                $perhitungan->save();
            }

            if ($perhitunganCalon) {
                // Update kolom perhitungan_ulang di tabel PerhitunganCalon
                $perhitunganCalon->each(function ($item) {
                    $item->perhitungan_ulang = 0; // Atur nilai sesuai kebutuhan
                    $item->save();
                });
            }
        }

        // Redirect atau response sesuai kebutuhan
        return redirect()->back()->with('success', 'Status berhasil diperbarui');
    }
}
