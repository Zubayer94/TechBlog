<?php

namespace App\repositories\PostRepository;

use App\Http\Resources\GlobalCollection;
use App\interfaces\CreudInterface;
use App\Models\Post;

class PostRepository implements CreudInterface
{
    public function getAll()
    {
        $posts = Post::select('title', 'description')->all();
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
