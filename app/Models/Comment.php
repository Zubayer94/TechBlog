<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $tsble = 'comments';
    protected $fillable = [
        'comment',
        'post_id'
    ];

    // <!--~~~~~~~ belongs to relation building starts from here ~~~~~~~~~-->
    public function post()
    {
        return $this->belongsTo('App\Models\Post');
    }
}
