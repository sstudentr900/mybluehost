<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Carousel;

class carouselSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Carousel::factory()->count(10)->create();
    }
}
