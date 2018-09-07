<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Platform;

class PlatformsController extends Controller
{
    public function index() {
        $platforms = Platform::all();

        return response($platforms, 200)->header('Content-Type', 'application/json');
    }
    
    public function store(Request $request) {

        foreach($request->input() as $key => $value) {
            if(empty($value) && ($key == 'company')){
                $request->request->set($key, '');
            }    
        }
        $platform = Platform::create($request->all());
        return redirect('dashboard/platforms');
    }

    public function edit($id) {
        $platform = Platform::where('id', $id)->first();

        return response($platform, 200)->header('Content-Type', 'application/json');
    }

    public function update(Request $request, $id) {

        foreach($request->input() as $key => $value) {
            if(empty($value) && ($key == 'company')){
                $request->request->set($key, '');
            }    
        }

        Platform::where('id', $id)->update($request->except('_token', '_method'));

        return redirect('dashboard/platforms');
    }

    public function destroy($id) {
        Platform::where('id', $id)->delete();

        return response('Usunieto', 200);
    }
}
