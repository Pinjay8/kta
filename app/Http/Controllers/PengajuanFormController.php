<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class PengajuanFormController extends Controller
{
    //

    public function show(){
        return Inertia::render('PengajuanFormPage');
    }
}
