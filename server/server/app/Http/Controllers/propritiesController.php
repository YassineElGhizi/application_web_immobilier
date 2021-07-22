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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getall(Request $request)
    {
        // return $request->id;
        return $data =Property::where('user_id' , $request->id)->get()->all();
        // return 'tnakt';
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
