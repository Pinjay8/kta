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
    
    //revoke api token logout
    Route::post('logout', [AuthController::class, 'logout']);
    
    Route::post('kegiatan', [KegiatanController::class, 'allList']);
    //ambil data profil
    Route::post('detail-anggota', [DashboardController::class, 'dashboard']);
    
    //ambil data kegiatan
    Route::post('kegiatan/hari-ini', [KegiatanController::class, 'now']);
    
    //melakukan absensi
    Route::post('kegiatan/absen', [AbsensiController::class, 'hadir']);
    //

});


