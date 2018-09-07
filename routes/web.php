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

    Route::put('/games/{slug}', [
        'uses'=> 'GamesController@update',
        'as'=> 'games.update'
    ]); 


    Route::get('/dashboard/genres', 'DashboardController@index');
    Route::get('/dashboard/genres/create', 'DashboardController@index');
    Route::get('/dashboard/genres/{id}/edit', 'DashboardController@index');
    Route::get('/genres', [
        'uses'=> 'GenresController@index',
        'as'=> 'genres.index'
    ]);

    Route::post('/genres', [
        'uses'=> 'GenresController@store',
        'as'=> 'genres.store'
    ]);

    Route::get('/genres/edit/{id}', [
        'uses'=> 'GenresController@edit',
        'as'=> 'genres.edit'
    ]);

    Route::put('/genres/{id}', [
        'uses'=> 'GenresController@update',
        'as'=> 'genres.update'
    ]);

    Route::get('/genres/delete/{id}', [
        'uses'=> 'GenresController@destroy',
        'as'=> 'genres.destroy'
    ]);
    

    Route::get('/dashboard/platforms', 'DashboardController@index');
    Route::get('/dashboard/platforms/create', 'DashboardController@index');
    Route::get('/dashboard/platforms/{id}/edit', 'DashboardController@index');
    Route::get('/platforms', [
        'uses'=> 'PlatformsController@index',
        'as'=> 'platforms.index'
    ]);

    Route::post('/platforms', [
        'uses'=> 'PlatformsController@store',
        'as'=> 'platforms.store'
    ]);

    Route::get('/platforms/edit/{id}', [
        'uses'=> 'PlatformsController@edit',
        'as'=> 'platforms.edit'
    ]);

    Route::put('/platforms/{id}', [
        'uses'=> 'PlatformsController@update',
        'as'=> 'platforms.update'
    ]);

    Route::get('/platforms/delete/{id}', [
        'uses'=> 'PlatformsController@destroy',
        'as'=> 'platforms.destroy'
    ]);

    Route::get('/raters', [
        'uses'=> 'RatersController@index',
        'as'=> 'raters.index'
    ]);

    Route::get('/reviewers', [
        'uses'=> 'ReviewersController@index',
        'as'=> 'Reviewers.index'
    ]);

    
});


Auth::routes();

Route::get('register', function() {
    return redirect('/');
});