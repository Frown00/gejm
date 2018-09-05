<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reviewer extends Model
{
    protected $hidden = ['pivot'];

    public function games() {
        return $this->belongsToMany('App\Game', 'game_review', 'game_id', 'reviewer_id', 'link');
    }
    
    public function logo() {
        return $this->hasOne('App\LogoImages');
    }
}
