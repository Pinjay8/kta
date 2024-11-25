<?php

use App\Http\Controllers\AbsensiController;
use App\Http\Controllers\AnggotaController;
use App\Http\Controllers\Auth\RedirectAuthenticatedUsersController;
use App\Http\Controllers\CalonController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\KegiatanController;
use App\Http\Controllers\PengajuanFormController;
use App\Http\Controllers\PerhitunganController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TpsController;
use App\Models\Calon;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;




/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('php-info', [AnggotaController::class, 'info']);

Route::get('/', function () {
    return Inertia::render('Auth/Login', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::group(['middleware' => 'auth'], function () {
    Route::get("/redirectAuthenticatedUsers", [RedirectAuthenticatedUsersController::class, "home"]);

    //Render Page
    // Kegiatan
    Route::get('/kegiatan', [KegiatanController::class, "show"])->name('kegiatan');
    Route::post('/kegiatan', [KegiatanController::class, "create"])->name('create.kegiatan');
    Route::post('/kegiatan/update/{id}', [KegiatanController::class, "update"])->name('update.kegiatan');
    Route::post('/kegiatan/delete/{id}', [KegiatanController::class, "delete"])->name('delete.kegiatan');
    // 
    // Calon
    Route::get('/calon', [CalonController::class, "show"])->name('calon');
    Route::post('/calon', [CalonController::class, "create"])->name('create.calon');
    Route::post('/calon/update/{id}', [CalonController::class, "update"])->name('update.calon');
    Route::post('/calon/delete/{id}', [CalonController::class, "delete"])->name('delete.calon');

    // TPS
    Route::get('/tps', [TpsController::class, "show"])->name('tps');
    Route::post('/tps', [tpsController::class, "create"])->name('create.tps');
    Route::post('/tps/update/{id}', [tpsController::class, "update"])->name('update.tps');
    Route::post('/tps/delete/{id}', [tpsController::class, "delete"])->name('delete.tps');
    Route::post('/tps/import', [TpsController::class, 'importExcel'])->name('import.tps');
    // Anggota
    Route::get('/anggota', [AnggotaController::class, "show"])->name('anggota');
    Route::post('/anggota/upload', [AnggotaController::class, "create"])->name('create.anggota');
    Route::post('/anggota/update/{id}', [AnggotaController::class, "update"])->name('update.anggota');
    Route::post('/anggota/delete/{id}', [AnggotaController::class, "delete"])->name('delete.anggota');
    Route::post('/anggota/import', [AnggotaController::class, 'importExcelAnggota'])->name('import.anggota');

    Route::get('/pengajuan-kta', [PengajuanFormController::class, "show"])->name('pengajuan');
    Route::get('/absensi/{id}', [AbsensiController::class, "show"])->name('absensi');
    // Route::get('/kegiatan/tambah', [KegiatanController::class, "tambah"])->name('tambah.kegiatan');
    Route::post('/kegiatan/aksi/ubah-kegiatan/{id}', [KegiatanController::class, "ubahstatus"]);


    // Perhitungan Ulang
    Route::get('/perhitungan-ulang', [PerhitunganController::class, "show"])->name('perhitunganUlang');
    Route::post('/perhitungan-ulang/update/{id}', [PerhitunganController::class, 'update'])->name('perhitungan-ulang.update');

    // Route::inertia('/adminDashboard', 'AdminDashboard')->name('adminDashboard');
    Route::get('/adminDashboard', [DashboardController::class, 'show'])->name('adminDashboard');

    Route::group(['middleware' => 'checkRole:superadmin'], function () {
        Route::inertia('/superAdminDashboard', 'SuperAdminDashboard')->name('superAdminDashboard');
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
