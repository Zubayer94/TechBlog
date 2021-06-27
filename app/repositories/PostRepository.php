<?php

namespace App\repositories;

use App\Models\Post;
use Illuminate\Http\Request;
use App\interfaces\CrudInterface;

class PostRepository implements CrudInterface
{
    public function getAll($length)
    {
        $posts = Post::select('id', 'title', 'description', 'user_id', 'created_at')
            ->orderby('id', 'desc')
            ->with(['user', 'comments.user'])
            ->paginate($length);
        return $posts;
    }

    public function create(Request $request)
    {
        $data = $request->only(['title', 'description']);
        $data['user_id'] = auth()->user()->id;
        $post = Post::create($data);
        $post = Post::with(['user', 'comments'])->findOrfail($post->id);
        return $post;
    }

    public function findById($id)
    {
        $post = Post::with(['user', 'comments.user'])->findOrfail($id);
        return $post;
    }

    public function update(Request $request, $id)
    {
        $post = Post::findOrfail($id);
        $data = $request->only(['title', 'description']);
        $post->fill($data)->save();
        return $post;
    }

    public function delete($id)
    {
        $post = Post::findOrfail($id);
        $post->delete();
        return $post;
    }
}
