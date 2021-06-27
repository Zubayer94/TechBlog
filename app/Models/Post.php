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
        'description',
        'user_id'
    ];

    // <!--~~~~~~~ belongs to relation building starts from here ~~~~~~~~~-->
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // <!--~~~~~~~ one to Many relation building starts from here ~~~~~~~~~-->
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
