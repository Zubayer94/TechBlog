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
        $dir = $request->input('dir');
        $length = $request->input('length');
        $orderby = $request->input('orderby');

        $filled = array_filter($request->only(['name', 'email', 'website']));
        $users = User::select('id', 'name', 'email', 'website')
            ->when(!empty($filled) > 0, function ($query) use ($filled) {
                foreach ($filled as $column => $value) {
                    $query->where($column, 'like', '%' . $value . '%');
                }
            })
            ->orderBy($orderby, $dir)
            ->paginate($length);
        return new GlobalCollection($users);
    }
    public function getUser($id)
    {
        $user = User::with(['posts', 'comments'])->findOrfail($id);
        return response()->json(['response' => 'success', 'user' => $user], 200);
    }
}
