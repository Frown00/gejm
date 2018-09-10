<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LogoImages extends Model
{
    public function rater() {
        return $this->hasOne('App\Rater', 'logo_id');
    }

    public function reviewer() {
        return $this->hasOne('App\Reviewer', 'logo_id');
    }
}
