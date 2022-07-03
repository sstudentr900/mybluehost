<?php

namespace Database\Factories;

use App\Models\Carousel;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;


class carouselFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    protected $model = Carousel::class;
    public function definition()
    {
        return [
            'sort'=>1,
            'cover'=>rand(1,999999999),
            'title'=>$this->faker->unique()->safeEmail,
            'release'=>'y',
        ];
    }
}
