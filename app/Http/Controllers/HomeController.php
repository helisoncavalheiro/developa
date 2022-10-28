<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function dashboard()
    {
        $projects = Auth::user()->projects;

        return Inertia::render('Home', [
            'projects' => ProjectResource::collection($projects),
        ]);
    }
}
