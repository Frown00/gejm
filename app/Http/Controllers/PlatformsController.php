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
        return $request;
    }
}
