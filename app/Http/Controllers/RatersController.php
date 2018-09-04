<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Rater;

class RatersController extends Controller
{
    public function index() {
        $raters = Rater::all();

        return response($raters, 200)->header('Content-Type', 'application/json');
    }
}
