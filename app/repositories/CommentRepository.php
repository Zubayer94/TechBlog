<?php

namespace App\repositories;

use App\Models\Comment;
use Illuminate\Http\Request;
use App\interfaces\CrudInterface;

class CommentRepository implements CrudInterface
{
    public function getAll($length)
    {
    }

    public function create(Request $request)
    {
        $data = $request->only(['comment']);
        $data['post_id'] =  $request->postId;
        $data['user_id'] = auth()->user()->id;
        $comment = Comment::create($data);
        $comment = Comment::with(['post', 'user'])->findOrfail($comment->id);
        return $comment;
    }

    public function findById($id)
    {
        $comment = Comment::with(['post', 'user'])->findOrfail($id);
        return $comment;
    }

    public function update(Request $request, $id)
    {
        $comment = Comment::findOrfail($id);
        $comment->fill($request->only(['comment']))->save();
        return $comment;
    }

    public function delete($id)
    {
        $comment = Comment::findOrfail($id);
        $comment->delete();
        return $comment;
    }
}
