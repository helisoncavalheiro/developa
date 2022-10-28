<?php

namespace App\Models;

use Database\Factories\ProjectFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Project extends Model
{
    use HasFactory;

    /**
     * Create a new factory instance for the model.
     *
     * @return \Iluminate\Database\Eloquent\Factories\Factory;
     */
    protected static function newFactory()
    {
        return ProjectFactory::new();
    }

    protected $fillable = ['id', 'name', 'description', 'owner'];

    protected static function booted()
    {
        static::creating(function ($project) {
            $project->owner_id = Auth::user()->id;
        });
    }

    /**
     * Owner relationship between User and Project model.
     *
     * @return \Illuminate\Contracts\Database\Query\Builder
     */
    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id');
    }
}
