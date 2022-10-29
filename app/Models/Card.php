<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    use HasFactory;

    /**
     * Fillable properties.
     *
     * @var array
     */
    protected $fillable = ['title', 'description', 'author_id'];

    /**
     * Defines the auhtor relation with the model.
     *
     * @return \Illuminate\Database\Query\Builder
     */
    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }
}
