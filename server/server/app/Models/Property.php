<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;

    protected $fillable = [
    'titre',
    'address',
    'surface',
    'price',
    'type',
    'status',
    'description',
    'image',
    'facility_id',
    'user_id'
    ];


}
