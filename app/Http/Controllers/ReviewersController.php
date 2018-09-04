<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Reviewer;

class ReviewersController extends Controller
{
    public function index() {
        $reviewers = Reviewer::all();

        return response($reviewers, 200)->header('Content-Type', 'application/json');
    }
}
