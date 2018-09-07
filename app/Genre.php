<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    protected $hidden = ['pivot'];
    protected $fillable = ['name', 'funky_name', 'description'];
    public function games() {
        return $this->belongsToMany('App\Game', 'game_genre', 'game_id', 'genre_id');
    }
}
