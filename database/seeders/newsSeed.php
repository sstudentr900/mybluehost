<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\news;

class newsSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        news::factory()->count(10)->create();
    }
}
