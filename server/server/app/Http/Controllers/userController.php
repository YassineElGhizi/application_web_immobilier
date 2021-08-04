<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Hash;
use DB;

class userController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $name = User::where('id','1')->get();
        return $name;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        // return $request->name;
        return User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'tel' => $request->tel,
            'role_id' => 2,
        ]);
    }

    public function login(Request $request)
    {
        $id = User::select('id')->where('email', $request->email )->get();
        $pass = DB::select('select password from users where id = ?',[$id[0]->id]);
        if( Hash::check($request->password, $pass[0]->password) )
        {
            $roles = User::select('role_id')->where('id' , $id[0]->id)->get();
            return response()->json([
                'role' => $roles[0]->role_id,
                'id' => $id[0]->id,
            ]);
        }else{
            return 0;
        }

    }
    public function search(Request $request)
    {
        return User::select('name' , 'tel')->where('id' , $request->id)->get()[0];
    }

}
