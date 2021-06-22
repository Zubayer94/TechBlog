<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $tsble = 'posts';
    protected $fillable = [
        'title',
        'description'
    ];

    // <!--~~~~~~~ one to Many relation building starts from here ~~~~~~~~~-->
    public function comments()
    {
        return $this->hasMany('App\Models\Comment');
    }
}
