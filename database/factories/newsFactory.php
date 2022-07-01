<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\news;

class newsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    protected $model = news::class;
    public function definition()
    {
        return [
            // $table->increments('id');
            // $table->unsignedInteger('sort');
            // $table->string('title',100);
            // $table->string('short',100);
            // $table->mediumText('tinymce');
            // $table->enum('release',['n','y'])->default('y');
            // $table->timestamps();
            'sort' => 1,
            'title' => $this->faker->name,
            'short' => Str::random(10),
            'tinymce' => $this->faker->text, 
            'release' => 'y',             
            // 'remember_token' => Str::random(10),
            // 'name' => $this->faker->name(),
            // 'email' => $this->faker->unique()->safeEmail(),
            // 'email_verified_at' => now(),
            // 'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            // 'remember_token' => Str::random(10),
        ];
    }
}
