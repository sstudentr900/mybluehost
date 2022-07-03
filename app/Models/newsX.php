<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class news extends Model
{
    use HasFactory;
    protected $table="news";
    protected $promaryKey='id';
    protected $fillable=[
        'sort',
        'title',
        'short',
        'tinymce',
        'release',
    ];
}
