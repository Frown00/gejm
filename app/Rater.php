<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rater extends Model
{
    protected $hidden = ['pivot'];

    public function games() {
        return $this->belongsToMany('App\Game', 'game_rating', 'game_id', 'rater_id');
    }
}
