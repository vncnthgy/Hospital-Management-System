<?php

function login(Request $request)
{
    // Validate the request...

    // Attempt to log in...
    $user = Auth::user();

    return response()->json([
        'token' => $user->createToken('token')->plainTextToken,
        'user' => $user
    ]);
}
