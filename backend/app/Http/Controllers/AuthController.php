<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => 3
        ]);

        return response()->json([
            'message' => 'User registered successfully',
            'user' => $user,
            'code' => 200
        ], 200);
    }

    public function login(Request $request) {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt($request->only(['email','password']))) {
            $user = User::where('email', $request->email)->first();
            return response()->json([
                'message' => 'Login successful',
                'code' => 200,
                'user' => $user
            ]);
        }

        return response()->json([
            'message' => 'The provided credentials do not match our records.',
            'code' => 401
        ]);
    }
}
