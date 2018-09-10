<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Reviewer;
use App\LogoImages;
use Illuminate\Support\Facades\Storage;

class ReviewersController extends Controller
{
    public function index() {
        $rreviewer = Reviewer::all();

        return response($rreviewer, 200)->header('Content-Type', 'application/json');
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

        $reviewer = Reviewer::create($request->except('logo-images'));
        $reviewer->logo_id = $logoId;
        $reviewer->save();
        return redirect('dashboard/reviewers');
    }

    public function edit($id) {
        $reviewer = Reviewer::where('id', $id)->first();
        if($reviewer->logo_id) {
            $logo = $reviewer->logo()->select('id', 'path')->get();
            $reviewer['logo'] = $logo; 
        } else {
            $reviewer['logo'] = null; 
        }

        return response($reviewer, 200)->header('Content-Type', 'application/json');
    }

    public function update(Request $request, $id) {
        $reviewer = Reviewer::where('id', $id)->first();
        $reviewer->update($request->except('_token', '_method', 'logo-image'));
        

        // Update logo of rater
        $currentLogo = null;
        $currentLogoName = '';
        $sentLogo = null;
        $sentLogoName = '';
        if($reviewer->logo_id) {
            $currentLogo = LogoImages::where('id', $reviewer->logo_id)->first();
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
            $reviewer->logo_id = $logoImage->id;
            $reviewer->save();
        } else {
            // Do nothing
        }

        return redirect('dashboard/reviewers');
    }

    public function destroy($id) {
        
        Reviewer::where('id', $id)->delete();

        $reviewer = Reviewer::where('id', $id)->first();
        $currentLogo = LogoImages::where('id', $reviewer->logo_id)->first();
        $currentLogo->delete();

        return response('Usunieto', 200);
    }
}
