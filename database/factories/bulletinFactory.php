<?php

namespace Database\Factories;
use App\Models\bulletin;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class bulletinFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    protected $model = bulletin::class;
    public function definition()
    {
        return [
            'sort'=>1,
            'title'=> Str::random(10),
            'short'=>'ff',
            'tinymce'=>now(),
            'release'=>'y',
        ];
    }
}
