<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    //

    public function show(){
        $data =[
            'sum_fpi' => 10,
            'sum_fpki' => 10,
            'sum_survey' => 10,
            'user_record' => 30,
            'avg' => 40,
            'fpi_terkabulkan' => 50,
            'fpi_ditolak' => 10,
            'fpi_menunggu' => 10,
            'fpki_terkabulkan' => 10,
            'fpki_ditolak' => 10,
            'fpki_menunggu' => 10,

        ];

        return Inertia::render('AdminDashboard',$data); 
    }
}
