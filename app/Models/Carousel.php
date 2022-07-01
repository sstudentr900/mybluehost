<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Carousel extends Model
{
    use HasFactory;
    protected $table="carousel";
    protected $promaryKey='id';
    protected $fillable=[
        'sort',
        'title',
        'cover',
        'release',
    ];
}
