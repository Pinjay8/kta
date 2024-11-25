<?php

namespace App\Http\Controllers;

use App\Models\Calon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class CalonController extends Controller
{

    public function create(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'nama' => 'required',
            'no_urut' => 'required',
            'status' => 'required',
        ]);

        $calon = new Calon([
            'nama' => $request->input('nama'),
            'no_urut' => $request->input('no_urut'),
            'status' => $request->input('status'),
        ]);

        $calon->save();

        return redirect()->back();
    }

    public function show()
    {
        $listCalon = Calon::orderBy('id', 'desc')->where('deleted_at', null)->get();
        return Inertia::render('CalonPage', [
            'data' => $listCalon,
            'title' => 'Calon',
        ]);
    }


    public function update(Request $request,  $id)
    {
        $request->validate([
            'nama' => 'required',
            'no_urut' => 'required',
            'status' => 'required',
        ]);

        $calon = Calon::find($id);

        $calon->update([
            'nama' => $request->input('nama'),
            'no_urut' => $request->input('no_urut'),
            'status' => $request->input('status'),
        ]);

        return redirect()->back();
    }

    public function delete($id)
    {
        $calon = Calon::where('id', $id)->delete();
    }
}
