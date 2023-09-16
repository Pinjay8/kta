<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RedirectAuthenticatedUsersController extends Controller
{
    //
    public function home()
    {
        if (auth()->user()->role == 'admin') {
            return redirect('/adminDashboard');
        }
        elseif(auth()->user()->role == 'superadmin'){
            return redirect('/superAdminDashboard');
        }
        else{
            return auth()->logout();
        }
    }
}
