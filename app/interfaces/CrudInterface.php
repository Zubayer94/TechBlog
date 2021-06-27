<?php

namespace App\interfaces;

use Illuminate\Http\Request;

interface CrudInterface
{
    public function getAll($length);
    public function create(Request $request);
    public function findById($id);
    public function update(Request $request, $id);
    public function delete($id);
}
