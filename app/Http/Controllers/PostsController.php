<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostsController extends Controller
{
    public function show($slug)
	{
	    return view('post', [
	    	'slug' => $slug
		]);
	}
}
