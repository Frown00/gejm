<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/', 'app');

Route::middleware('auth')->group(function() {
    Route::get('/dashboard', [
        'uses'=> 'DashboardController@index',
        'as'=> 'dashboard.index'
    ]);

    Route::get('/games', [
        'uses'=> 'GamesController@index',
        'as'=> 'games.index'
    ]);




    Route::get('/dashboard/create', [
        'uses'=> 'DashboardController@index',
        'as'=> 'dashboard.create'
    ]);

    Route::post('/games', [
        'uses'=> 'GamesController@store',
        'as'=> 'games.store'
    ]);


    Route::get('/games/{id}', [
        'uses'=> 'GamesController@show',
        'as'=> 'games.show'
    ]);


    Route::get('/dashboard/{id}/edit/', [
        'uses'=> 'DashboardController@index',
        'as'=> 'dashboard.edit'
    ]);

    Route::get('/games/edit/{slug}', [
        'uses'=> 'GamesController@edit',
        'as'=> 'games.edit'
    ]);

    Route::get('/games/delete/{slug}', [
        'uses'=> 'GamesController@destroy',
        'as'=> 'games.destroy'
    ]);

    Route::post('/games/{slug}', [
        'uses'=> 'GamesController@update',
        'as'=> 'games.update'
    ]); 

    Route::get('/genres', [
        'uses'=> 'GenresController@index',
        'as'=> 'genres.index'
    ]);

    Route::get('/platforms', [
        'uses'=> 'PlatformsController@index',
        'as'=> 'platforms.index'
    ]);

    Route::get('/raters', [
        'uses'=> 'PlatformsController@index',
        'as'=> 'platforms.index'
    ]);

    Route::get('/reviewers', [
        'uses'=> 'PlatformsController@index',
        'as'=> 'platforms.index'
    ]);

    
});


Auth::routes();

Route::get('register', function() {
    return redirect('/');
});