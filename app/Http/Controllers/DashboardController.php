<?php

namespace App\Http\Controllers;

use App\Models\Absensi;
use App\Models\Anggota;
use App\Models\Calon;
use App\Models\Kegiatan;
use App\Models\Perhitungan;
use App\Models\PerhitunganCalon;
use App\Models\Tps;
use Illuminate\Http\Request;
use Inertia\Inertia;
use PDO;

class DashboardController extends Controller
{
    //

    public function show()
    {
        $absensi = Absensi::where('status', '1')->count();
        $perhitungan = Perhitungan::count();
        $tps = Tps::count();
        $kegiatan = Kegiatan::count();
        $anggota = Anggota::where('status', 'Saksi Gubernur')->count();
        $allCalon = Calon::count();

        // $calonFirst = Calon::where('no_urut', '1')->where('status', 'Walikota')->first();
        // $calonSecond = Calon::where('no_urut', '2')->where('status', 'Walikota')->first();
        // $calonGubernurFirst = Calon::where('no_urut', '1')->where('status', 'Gubernur')->first();
        // $calonGubernurSecond = Calon::where('no_urut', '2')->where('status', 'Gubernur')->first();

        $calons = Calon::whereIn('no_urut', [1, 2])
            ->whereIn('status', ['Walikota', 'Gubernur'])
            ->get()
            ->groupBy('status');

        $calonFirst = $calons['Walikota']->firstWhere('no_urut', 1);
        $calonSecond = $calons['Walikota']->firstWhere('no_urut', 2);
        $calonGubernurFirst = $calons['Gubernur']->firstWhere('no_urut', 1);
        $calonGubernurSecond = $calons['Gubernur']->firstWhere('no_urut', 2);

        $totalInputByAnggotaGubernur = PerhitunganCalon::whereHas('anggota', function ($query) {
            $query->where('status', 'Saksi Gubernur');
        })->where('deleted_at', null)->count();

        $countSaksiGubernur = Anggota::where('status', 'Saksi Gubernur')->count();

        $persentaseDataAnggotaGubernur =  ($totalInputByAnggotaGubernur / $countSaksiGubernur) * 100;

        $totalPerhitunganGubernur = PerhitunganCalon::whereHas('calon', function ($query) {
            $query->where('status', 'Gubernur');
        })->where('deleted_at', null)->sum('suara_calon');

        $perhitunganAnggotaPertamaGubernur = PerhitunganCalon::whereHas('calon', function ($query) {
            $query->where('status', 'Gubernur');
        })->where('deleted_at', null)->where('id_calon', $calonGubernurFirst->id)->sum('suara_calon');


        if ($totalPerhitunganGubernur > 0) {
            $persentaseInputDataGubernur = ($perhitunganAnggotaPertamaGubernur / $totalPerhitunganGubernur) * 100;
        } else {
            $persentaseInputDataGubernur = 0; // Atau tindakan lain jika diperlukan
        }

        $perhitunganAnggotaKeduaGubernur = PerhitunganCalon::whereHas('calon', function ($query) {
            $query->where('status', 'Gubernur');
        })->where('deleted_at', null)->where('id_calon', $calonGubernurSecond->id)->sum('suara_calon');

        if ($totalPerhitunganGubernur > 0) {
            $persentaseAnggotaKeduaGubernur = ($perhitunganAnggotaKeduaGubernur / $totalPerhitunganGubernur) * 100;
        } else {
            $persentaseAnggotaKeduaGubernur = 0; // Atau tindakan lain jika diperlukan
        }

        $totalPerhitunganWalikota = PerhitunganCalon::whereHas('calon', function ($query) {
            $query->where('status', 'Walikota');
        })->where('deleted_at', null)->sum('suara_calon');

        $perhitunganAnggotaPertamaWalikota = PerhitunganCalon::whereHas('calon', function ($query) {
            $query->where('status', 'Walikota');
        })->where('deleted_at', null)->where('id_calon', $calonFirst->id)->sum('suara_calon');

        if ($totalPerhitunganWalikota > 0) {
            $persentaseAnggotaPertamaWalikota = ($perhitunganAnggotaPertamaWalikota / $totalPerhitunganWalikota) * 100;
        } else {
            $persentaseAnggotaPertamaWalikota = 0; // Atau tindakan lain jika diperlukan
        }

        $perhitunganAnggotaKeduaWalikota = PerhitunganCalon::whereHas('calon', function ($query) {
            $query->where('status', 'Walikota');
        })->where('deleted_at', null)->where('id_calon', $calonSecond->id)->sum('suara_calon');

        if ($totalPerhitunganWalikota > 0) {
            $persentaseAnggotaKeduaWalikota = ($perhitunganAnggotaKeduaWalikota / $totalPerhitunganWalikota) * 100;
        } else {
            $persentaseAnggotaKeduaWalikota = 0; // Atau tindakan lain jika diperlukan
        }




        return Inertia::render('AdminDashboard', [
            'absensi' => $absensi ?? 0,
            'data' => $data ?? 0,
            'perhitungan' => $perhitungan ?? 0,
            'tps' => $tps ?? 0,
            'kegiatan' => $kegiatan ?? 0,
            'anggota' => $anggota ?? 0,
            'allCalon' => $allCalon,
            'calonFirst' => $calonFirst ?? 0,
            'calonSecond' => $calonSecond ?? 0,
            'calonGubernurFirst' => $calonGubernurFirst ?? 0,
            'calonGubernurSecond' => $calonGubernurSecond ?? 0,
            'totalInputByAnggota' => $totalInputByAnggota ?? 0,
            'perhitunganAnggotaPertamaGubernur' => $perhitunganAnggotaPertamaGubernur ?? 0,
            'persentaseInputDataGubernur' => $persentaseInputDataGubernur ?? 0,
            'perhitunganAnggotaKeduaGubernur' => $perhitunganAnggotaKeduaGubernur ?? 0,
            'persentaseAnggotaKeduaGubernur' => $persentaseAnggotaKeduaGubernur ?? 0,
            'totalPerhitunganWalikota' => $totalPerhitunganWalikota ?? 0,
            'perhitunganAnggotaPertamaWalikota' => $perhitunganAnggotaPertamaWalikota ?? 0,
            'persentaseAnggotaPertamaWalikota' => $persentaseAnggotaPertamaWalikota ?? 0,
            'perhitunganAnggotaKeduaWalikota' => $perhitunganAnggotaKeduaWalikota ?? 0,
            'persentaseAnggotaKeduaWalikota' => $persentaseAnggotaKeduaWalikota ?? 0,
            'totalInputByAnggotaGubernur' => $totalInputByAnggotaGubernur ?? 0,
            'persentaseDataAnggotaGubernur' => $persentaseDataAnggotaGubernur ?? 0,
            'countSaksiGubernur' => $countSaksiGubernur ?? 0,
        ]);
    }
}
