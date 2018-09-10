<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rater extends Model
{
    protected $hidden = ['pivot'];
    protected $fillable = ['name', 'logo_id'];
    public function games() {
        return $this->belongsToMany('App\Game', 'game_rating', 'game_id', 'rater_id');
    }

    public function logo() {
        return $this->belongsTo('App\LogoImages');
    }
}
