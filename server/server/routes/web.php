<?php

use Illuminate\Support\Facades\Route;

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

// Route::get('/', function () {
//     return view('welcome');
// });

// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


Route::get('/users', [App\Http\Controllers\UserController::class, 'index']);
Route::post('/registerUser', [App\Http\Controllers\UserController::class, 'create']);
Route::post('/loginUser', [App\Http\Controllers\UserController::class, 'login']);
Route::post('/add', [App\Http\Controllers\propritiesController::class, 'store']);
Route::post('/getall', [App\Http\Controllers\propritiesController::class, 'getall']);
Route::post('/getfacilitydetailles', [App\Http\Controllers\propritiesController::class, 'getone']);
Route::post('/update', [App\Http\Controllers\propritiesController::class, 'update']);
Route::post('/delete', [App\Http\Controllers\propritiesController::class, 'delete']);
Route::post('/search', [App\Http\Controllers\propritiesController::class, 'search']);

