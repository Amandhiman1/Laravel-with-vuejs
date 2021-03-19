<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Data;

class MainController extends Controller {
	public function storeItem(Request $request) {
		$data = new Data ();
		$data->name = $request->name;
		$data->lastname = $request->lastname;
		$data->phone = $request->phone;
		$data->email = $request->email;
		$data->dob = $request->dob;
		$data->salary = $request->salary;
		$data->save ();
		return $data;
	}
	public function readItems() {
		$data = Data::all ();
		return $data;
	}
	public function deleteItem(Request $request) {
		$data = Data::find ( $request->id )->delete ();
	}
	public function editItem(Request $request, $id){
		$data =Data::where('id', $id)->first();
		$data->name = $request->get('val_1');
		$data->lastname = $request->get('val_2');
		$data->phone = $request->get('val_3');
		$data->email = $request->get('val_4');
		$data->dob = $request->get('val_5');
		$data->salary = $request->get('val_6');
		$data->save();
		return $data;
	}
}