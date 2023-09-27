<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AnggotaController;
use App\Http\Controllers\KegiatanController;
use App\Http\Controllers\PengajuanFormController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\RedirectAuthenticatedUsersController;


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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::group(['middleware' => 'auth'], function() {
    Route::get("/redirectAuthenticatedUsers", [RedirectAuthenticatedUsersController::class, "home"]);

    //Render Page
    Route::get('/kegiatan', [KegiatanController::class, "show"])->name('kegiatan');
    Route::get('/anggota', [AnggotaController::class, "show"])->name('anggota');
    Route::get('/pengajuan-kta', [PengajuanFormController::class, "show"])->name('pengajuan');
    Route::get('/kegiatan/tambah', [KegiatanController::class, "tambah"])->name('tambah.kegiatan');

    Route::group(['middleware' => 'checkRole:admin'], function() {
        Route::inertia('/adminDashboard', 'AdminDashboard')->name('adminDashboard');
    });
    
    Route::group(['middleware' => 'checkRole:superadmin'], function() {
        Route::inertia('/superAdminDashboard', 'SuperAdminDashboard')->name('superAdminDashboard');
    }); 
    
}); 

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
