<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $rules = [
            'email' => 'required|email',
            'password' => 'required'
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json($errors, 404);
        }
        try {
            if (auth()->attempt(['email' => $request->email, 'password' => $request->password])) {
                $accessToken = auth()->user()->createToken('authToken')->accessToken;
                return response(['user' => auth()->user(), 'access_token' => $accessToken], 200);
            } else {
                return response(['message' => 'Invalid credentials'], 404);
            }
        } catch (\Illuminate\Database\QueryException $ex) {
            return response(['message' => $ex->getMessage()],  400);
        }
    }

    public function register(Request $request)
    {
        $rules = [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'website' => 'nullable|url|max:250',
            'password' => 'required|string|min:6|confirmed',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json($errors, 404);
        }

        $userData = $request->only(['name', 'email', 'website']);
        $userData['password'] = bcrypt($request->password);
        try {
            $user = User::create($userData);
            return response()->json(['response' => 'Registered successfully', 'user' => $user],  200);
        } catch (\Illuminate\Database\QueryException $ex) {
            return response()->json(['response' => $ex->getMessage()], 404);
        }
    }

    public function getCurrentUser(Request $request)
    {
        return $request->user()->load('comments');
    }

    public function getAuthPosts()
    {
        $authPosts = Post::with(['user', 'comments'])
            ->where('user_id', auth()->user()->id)
            ->get();
        return response()->json(['response' => 'success', 'authPosts' => $authPosts], 200);
    }

    public function logout()
    {
        auth()->user()->tokens->each(function ($token, $key) {
            $token->delete();
        });

        return response()->json('Logged out successfully!', 200);
    }
}
