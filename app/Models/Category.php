<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'article_num', 'search_num'
    ];

    public function articles()
    {
        return $this->belongsTo(Article::class, 'category_id', 'id');
    }
}