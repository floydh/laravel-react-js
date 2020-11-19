<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
    public function show($slug)
	{
		JavaScript::put([
	    	'slug' => $slug
	    ]);
	    
	    return view('post', [
	    	'slug' => $slug
		]);
	}
}
