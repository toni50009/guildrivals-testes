<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\File;

Route::get('/{any}', function () {
    $path = public_path('index.html');
    if (!File::exists($path)) {
        abort(404);
    }
    return File::get($path);
})->where('any', '.*');
