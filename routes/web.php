<?php

use App\Http\Controllers\ProjectController;
use App\Models\Project;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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



Route::middleware(['auth', 'web'])->group(function () {
  Route::get('/', function () {
    return redirect(RouteServiceProvider::HOME);
  });

  Route::prefix('projects')->group(function () {
    Route::get('/', [ProjectController::class, 'index']);
    Route::post('/', [ProjectController::class, 'store']);
    Route::get('/new', [ProjectController::class, 'form']);
    Route::get('/{project}', [ProjectController::class, 'show']);
  });
});

require __DIR__ . '/auth.php';
