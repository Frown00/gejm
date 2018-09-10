<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Rater;
use App\LogoImages;
use Illuminate\Support\Facades\Storage;

class RatersController extends Controller
{
    public function index() {
        $raters = Rater::all();

        return response($raters, 200)->header('Content-Type', 'application/json');
    }

    public function store(Request $request) {
        $logoId = null;
        if($request->file('logo-image')) {
            $image = $request->file('logo-image');
            $imageName = $image->getClientOriginalName();
            
            if($image !== null) {
                $path = Storage::putFileAs('public/upload/logo-images', $image, $imageName);
                $logoImage = new LogoImages();
                $logoImage->path = $imageName;
                $logoImage->save();
                $logoId = $logoImage->id;
            }
        }

        $rater = Rater::create($request->except('logo-images'));
        $rater->logo_id = $logoId;
        $rater->save();
        return redirect('dashboard/raters');
    }

    public function edit($id) {
        $rater = Rater::where('id', $id)->first();
        if($rater->logo_id) {
            $logo = $rater->logo()->select('id', 'path')->get();
            $rater['logo'] = $logo; 
        } else {
            $rater['logo'] = null; 
        }
        return response($rater, 200)->header('Content-Type', 'application/json');
    }

    public function update(Request $request, $id) {
        $rater = Rater::where('id', $id)->first();
        
        $rater->update($request->except('_token', '_method', 'logo'));
        

        // Update logo of rater
        $currentLogo = null;
        $currentLogoName = '';
        $sentLogo = null;
        $sentLogoName = '';
        if($rater->logo_id) {
            $currentLogo = LogoImages::where('id', $rater->logo_id)->first();
            $currentLogoName = $currentLogo !== null ? $currentLogo->path : '';
        }

        if($request->file('logo-image')) {
            $sentLogo = $request->file('logo-image');
            $sentLogoName = $sentLogo->getClientOriginalName();
        }
        
        if($currentLogoName !== $sentLogoName && $sentLogo !== null){
            if($currentLogo) {
                Storage::delete('public/upload/logo-images/' . $currentLogoName);
                $currentLogo->delete();
            }
            $path = Storage::putFileAs('public/upload/logo-images', $sentLogo, $sentLogoName);
            $logoImage = new LogoImages();
            $logoImage->path = $sentLogoName;
            $logoImage->save();
            $rater->logo_id = $logoImage->id;
            $rater->save();
        } else {
            // Do nothing
        }

        return redirect('dashboard/raters');
    }

    public function destroy($id) {
        Rater::where('id', $id)->delete();

        return response('Usunieto', 200);
    }
}
