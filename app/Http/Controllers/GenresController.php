<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Genre;

class GenresController extends Controller
{
    public function index() {
        $genres = Genre::all();

        return response($genres, 200)->header('Content-Type', 'application/json');
    }
    
    public function store(Request $request) {

        foreach($request->input() as $key => $value) {
            if(empty($value) && ($key == 'description')){
                $request->request->set($key, '');
            }    
        }
        $genre = Genre::create($request->all());
        return redirect('dashboard/genres');
    }

    public function edit($id) {
        $genre = Genre::where('id', $id)->first();

        return response($genre, 200)->header('Content-Type', 'application/json');
    }

    public function update(Request $request, $id) {

        foreach($request->input() as $key => $value) {
            if(empty($value) && ($key == 'description' || $key == 'funky_name')){
                $request->request->set($key, '');
            }    
        }

        Genre::where('id', $id)->update($request->except('_token', '_method'));

        return redirect('dashboard/genres');
    }

    public function destroy($id) {
        Genre::where('id', $id)->delete();

        return response('Usunieto', 200);
    }

}
