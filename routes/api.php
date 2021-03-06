<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('games', 'GamesAPIController@index');

Route::get('games/{slug}', 'GamesAPIController@show');
Route::get('platforms', 'PlatformsController@index');
Route::get('genres', 'GenresController@index');

