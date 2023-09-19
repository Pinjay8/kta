<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\KegiatanController;

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

// Route::post('register', [AuthController::class, 'register']);


// Route::middleware(['auth:sanctum','abilities:anggota'])->get('detail', [AuthController::class, 'detail']);


//route login
Route::post('login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum', 'abilities:anggota'])->group(function () {
    //ambil data detail pengguna
    Route::get('detail', [AuthController::class, 'detail']);

    //revoke api token logout
    Route::post('logout', [AuthController::class, 'logout']);

    //ambil data kegiatan
    Route::post('kegiatan', [KegiatanController::class, 'main']);
    Route::post('kegiatan/akan-datang', [KegiatanController::class, 'akandatang']);
    Route::post('kegiatan/berlangsung', [KegiatanController::class, 'berlangsung']);
    Route::post('kegiatan/selesai', [KegiatanController::class, 'selesai']);

    //

});

// Route::middleware('auth:anggota')->get('detail', function (Request $request) {
//     return $request->user();
// });


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
