<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reviewer extends Model
{
    protected $hidden = ['pivot'];
    protected $fillable = ['name', 'logo_id'];
    public function games() {
        return $this->belongsToMany('App\Game', 'game_review', 'game_id', 'reviewer_id', 'link');
    }
    
    public function logo() {
        return $this->belongsTo('App\LogoImages');
    }
}
