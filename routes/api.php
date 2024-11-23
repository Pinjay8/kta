<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\KegiatanController;
use App\Http\Controllers\API\PerhitunganUlangController;
use App\Http\Controllers\API\PerhitunganController;
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



//route login
Route::post('login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum', 'abilities:anggota'])->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
    
    Route::get('detail-anggota', [AuthController::class, 'show']);

    Route::get('kegiatan', [KegiatanController::class, 'show']);

    Route::get('absensi', [AbsensiController::class, 'show']);
    Route::post('absensi/checkin', [AbsensiController::class, 'checkin']);
    Route::post('absensi/checkout', [AbsensiController::class, 'checkout']);
    
    Route::post('perhitungan', [PerhitunganController::class, 'store']);
    Route::post('perhitungan/ulang', [PerhitunganUlangController::class, 'store']);
});


