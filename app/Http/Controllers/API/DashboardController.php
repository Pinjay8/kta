<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Anggota;
use Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class DashboardController extends Controller
{
    //
    public function dashboard(){
        $anggota = Auth::user();
        return response()->json([
            'data' => $anggota
        ]);
    }
}
