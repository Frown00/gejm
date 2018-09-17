<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Platform extends Model
{   
    protected $hidden = ['pivot'];
    protected $fillable = ['name', 'company'];
    public function games() {
        return $this->belongsToMany('App\Game', 'game_platform', 'game_id', 'genre_id');
    }
}
