<?php

namespace App\interfaces;

interface CreudInterface
{
    public function getAll();
    public function create($request);
    public function findById($id);
    public function update($id, $request);
    public function delete($id);
}
