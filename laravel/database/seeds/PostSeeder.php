<?php

use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('posts')->insert([
            'image' => "https://i.imgur.com/RzL2d9T.jpg",
            'description' => "Sou eu, um gatinho",
            'likes' => 10,
        ]);
        DB::table('posts')->insert([
            'image' => "https://www.motionpictures.org/wp-content/uploads/2019/03/CaptainMarvel5c805147ccd73-1400x933.jpg",
            'description' => "Sou eu pensando na vida",
            'likes' => 10,
        ]);
        DB::table('posts')->insert([
            'image' => "https://thoughtcatalog.files.wordpress.com/2014/07/shutterstock_84216661.jpg?w=786&h=548",
            'description' => "Eu putasso",
            'likes' => 10,
        ]);
    }
}
