<?php

namespace Database\Factories;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->paragraph($nbSentences = 1, $variableNbSentences = true),
            'description' => $this->faker->paragraph($nbSentences = 3, $variableNbSentences = true),
            'user_id' => User::factory()->create(),
        ];
    }
}
