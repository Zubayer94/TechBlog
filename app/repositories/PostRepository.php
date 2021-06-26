<?php

namespace App\repositories;

use App\Http\Resources\GlobalCollection;
use App\interfaces\CrudInterface;
use App\Models\Post;

class PostRepository implements CrudInterface
{
    public function getAll($length)
    {
        $posts = Post::select('id', 'title', 'description')->paginate($length);
        return new GlobalCollection($posts);
    }

    public function create($request)
    {
    }

    public function findById($id)
    {
        $post = Post::findOrfail($id);
        return response()->json($post, 200);
    }

    public function update($id, $request)
    {
    }

    public function delete($id)
    {
    }
}
