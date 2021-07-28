<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Facility;
use App\Models\Property;

class propritiesController extends Controller
{

    public function store(Request $request)
    {
        $f_id = Facility::create([
            'room' => $request->chambre,
            'garage' => $request->garage,
            'bathroom' => $request->salleBain,
        ])->id;

        Property::create([
        'titre' => $request->titre ,
        'address' => $request->address,
        'surface' => $request->surface  ,
        'price' => $request->price ,
        'type' => $request->type  ,
        'status' => $request->Status  ,
        'description' => $request->description  ,
        'image' => $request->image ,
        'facility_id' => $f_id ,  
        'user_id' => $request->id
        ])->id;
    }

    public function getall(Request $request)
    {
        return $data =Property::where('user_id' , $request->id)->get()->all();
    }

    public function getone(Request $request)
    {
        return $data =Facility::find($request->facility_id);
    }

    public function update(Request $request)
    {
        // return $request;     
        Facility::where('id', $request->facility_id)->update([
            'room' => $request->chambre,
            'garage' => $request->garage ,
            'bathroom' => $request->salleBain
            ]);

        Property::where('id' , $request->propriety_id)->update([
            'titre' => $request->titre, 
            'address' => $request->address, 
            'surface' => $request->surface, 
            'price' => $request->price,
            'type' => $request->type,
            'status' => $request->Status,
            'description' => $request->description,
            'image' => $request->image,
            ]);
    }

    public function delete(Request $request)
    {
        // return $request->id;
        // $f_id = Property::where('facility_id' , $request->id)->get();
        $f_id = (Property::where('facility_id' , $request->id)->get())[0]->id;
        Facility::find($f_id)->delete();
        Property::find($request->id)->delete();
        // return $f_id;
    }
}
