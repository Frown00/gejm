<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GameImages extends Model
{
    public function game() {
        return $this->belongsTo('App\Game', 'game_id');
    }
}
