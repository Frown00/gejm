<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    protected $hidden = ['pivot'];
    
    public function genres() {
        return $this->belongsToMany('App\Genre', 'game_genre', 'game_id', 'genre_id');
    }
    
    public function platforms() {
        return $this->belongsToMany('App\Platform', 'game_platform', 'game_id', 'platform_id');
    }
    
    public function ratings() {
        return $this->belongsToMany('App\Rater', 'game_rating', 'game_id', 'rater_id')->withPivot('rating');
    }
    
    public function reviews() {
        return $this->belongsToMany('App\Reviewer', 'game_review', 'game_id', 'reviewer_id')->withPivot('link');
    }  
}
