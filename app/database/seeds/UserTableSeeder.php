<?php

class UserTableSeeder extends Seeder {

	public function run()
	{

		User::create(array(
			'full_name' => 'Eli José Carrasquero',
			'phone' => '+58 424 602 9989',
			'picture' => 'image.jpg',
			'description' => 'Bio',
			'email' => 'user@gmail.com',
			'password' => \Hash::make('2512'),
			'username' => 'ielijose',
			'type' => 'user'
			));

		User::create(array(
			'full_name' => 'Administrador',
			'phone' => '+58 424 602 9989',
			'picture' => 'image.jpg',
			'description' => 'Bio',
			'email' => 'admin@gmail.com',
			'password' => \Hash::make('2512'),
			'username' => 'admin',
			'type' => 'admin'
			));

	}

}