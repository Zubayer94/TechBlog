<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\GlobalCollection;
use App\Models\User;

class UserListController extends Controller
{
    public function index(Request $request)
    {
        $length = $request->input('length');
        $filled = array_filter($request->only(['name', 'email']));
        $users = User::select('id', 'name', 'email')
            ->orderBy('id', 'desc')
            ->when(!empty($filled) > 0, function ($query) use ($filled) {
                foreach ($filled as $column => $value) {
                    $query->where($column, 'like', '%' . $value . '%');
                }
            })
            ->paginate($length);
        return new GlobalCollection($users);
    }
}
