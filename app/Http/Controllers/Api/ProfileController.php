<?php

namespace App\Http\Controllers\Api;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\repositories\PostRepository;

class ProfileController extends Controller
{
    public function __construct(PostRepository $postRepository)
    {
        $this->postRepository = $postRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {

            $authUserposts = Post::select('id', 'title', 'description', 'user_id')
                ->where('user_id', auth()->user->id)
                ->get();

            return response()->json(['response' => 'Success', 'authPosts' => $authUserposts], 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            return response()->json(['response' => $ex->getMessage()], 404);
        }
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {

            $foundAuthPost = $this->postRepository->findById($id);

            return response()->json(['response' => 'Success', 'foundAuthPost' => $foundAuthPost], 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            return response()->json(['response' => $ex->getMessage()], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $rules = [
            'title' => 'required|string|max:250',
            'description' => 'required|string',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json($errors, 404);
        }

        try {

            $updatedAuthPost = $this->postRepository->update($request, $id);

            return response()->json(['response' => 'Post Updated successfully', 'updatedAuthPost' => $updatedAuthPost], 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            return response()->json(['response' => $ex->getMessage()], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $deletedAuthPost = $this->postRepository->delete($id);

            return response()->json(['response' => 'Success', 'deletedAuthPost' => $deletedAuthPost], 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            return response()->json(['response' => $ex->getMessage()], 404);
        }
    }
}
