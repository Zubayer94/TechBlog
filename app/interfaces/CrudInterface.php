<?php

namespace App\interfaces;

interface CrudInterface
{
    public function getAll($length);
    public function create($request);
    public function findById($id);
    public function update($id, $request);
    public function delete($id);
}
