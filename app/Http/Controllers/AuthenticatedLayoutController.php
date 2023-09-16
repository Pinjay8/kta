<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


class AuthenticatedLayoutController extends Controller
{
    //
    public function admin(){
        Route::inertia('/adminDashboard', 'AdminDashboard');
    }
    public function user(){
        Route::inertia('/userDashboard', 'UserDashboard');
    }
    public function guest(){
        Route::inertia('/guestDashboard', 'GuestDashboard');
    }


}
