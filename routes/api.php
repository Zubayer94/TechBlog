<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


Route::middleware('auth:api')->group(function () {
    Route::get('/logout', 'AuthController@logout');
    Route::get('/user', 'AuthController@getCurrentUser');
    Route::post('/login', 'AuthController@login')->withoutMiddleware('auth:api');
    Route::post('/register', 'AuthController@register')->withoutMiddleware('auth:api');

    Route::apiResource('/posts', 'PostController');
    Route::get('posts', 'PostController@index')->withoutMiddleware('auth:api');
    Route::get('posts/{postId}', 'PostController@show')->withoutMiddleware('auth:api');
    Route::post('comment', 'CommentController@store');
    Route::get('users', 'UserListController@index');
});
