<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
use Str;
use Hash;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        DB::table('roles')->insert([
            'name' => Str::random(0).'admin',
        ]);
        DB::table('roles')->insert([
            'name' => Str::random(0).'publisher',
        ]);
        DB::table('users')->insert([
            'name' => Str::random(0).'admin',
            'email' => Str::random(0).'admin@admin.com',
            'password' => Hash::make('admin'),
            'tel' => '00000000',
            'role_id' => '1'
        ]);
    }
}
