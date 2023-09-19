<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Anggota;
use Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;



class AuthController extends Controller
{
    //
    

    public function login (Request $request){

        
        //CEK NO HP & PASS
        if (! Auth::guard('anggota')->attempt($request->only('no_hp', 'password'))) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        }

        //VALIDASI APABILA TERDAPAT TOKEN SETELAH USER LOGIN
        //JIKA TERDAPAT TOKEN SEBELUMNYA OTOMATIS AKAN DIHAPUS
        if(Auth::guard('anggota')->user()->tokens()){
            Auth::guard('anggota')->user()->tokens()->delete();
        }


        $user = Anggota::where('no_hp', $request->no_hp)->firstOrFail();
        //GENERATE TOKEN SETELAH LOGIN
        $token = $user->createToken('auth_token')->plainTextToken;

        $userdata = Auth::guard('anggota')->user();
        $detailnama = $userdata->nama;
        $detailnohp = $userdata->no_hp;
        $detailid = $userdata->no_anggota;

        return response()->json([
            'message' => 'Login success',
            'token' => $token,
            'nama' => $detailnama,
            'no_hp' => $detailnohp,
            'id_anggota' => $detailid,

        ]);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'nik' => 'required|integer',
            'ttl' => 'required|string',
            'jk' => 'required',
            'jabatan' => 'required|string',
            'pekerjaan' => 'required|string',
            'no_anggota' => 'required',
            'password' => 'required|string|min:8'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $anggota = Anggota::create($input);

        $success['token'] = $anggota->createToken('auth_token')->plainTextToken;
        $success['nama'] = $anggota->nama;

        return response()->json([
            'success' => true,
            'data' => $success,
            'token_type' => 'Bearer'
        ]);
    }

    public function logout(){
        Auth::user()->tokens()->delete();
        return response()->json([
            'message' => 'logout success'
        ]);
    }

    public function detail(){
        if (Auth::check()) {
            $anggota = Auth::user();
            return Response(['data' => $anggota],200);
        }else{
            return Response(['data' => 'Unauthorized'],401);
        }

    }

}
