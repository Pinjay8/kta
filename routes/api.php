<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\KegiatanController;
use App\Http\Controllers\API\AbsensiController;
use App\Http\Controllers\API\DashboardController;
use App\Http\Controllers\AnggotaController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('register', [AuthController::class, 'register']);





//route login
Route::post('login', [AuthController::class, 'login']);
Route::post('tambah-anggota', [AnggotaController::class, 'create']);
Route::post('kegiatan/tambah-kegiatan', [KegiatanController::class, 'store']);

Route::middleware(['auth:sanctum', 'abilities:anggota'])->group(function () {
    //ambil data detail pengguna
    // Route::get('detail', [AuthController::class, 'detail']);

    //revoke api token logout
    Route::post('logout', [AuthController::class, 'logout']);

    //melakukan absensi
    Route::post('kegiatan/aksi/hadir', [AbsensiController::class, 'hadir']);


    //ambil data profil
    Route::post('detail', [DashboardController::class, 'dashboard']);

    //ambil data kegiatan
    Route::post('kegiatan', [KegiatanController::class, 'allList']);
    Route::post('kegiatan/hari-ini', [KegiatanController::class, 'now']);
    Route::post('kegiatan/akan-datang', [KegiatanController::class, 'akandatang']);
    Route::post('kegiatan/berlangsung', [KegiatanController::class, 'berlangsung']);
    Route::post('kegiatan/selesai', [KegiatanController::class, 'selesai']);

    //

});


