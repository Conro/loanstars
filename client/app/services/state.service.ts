import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from './form-data.service';

@Injectable()
export class StateService {

  isEditing: boolean

  constructor(private _router: Router, private _formDataService: FormDataService) { }


  editApp(_id: string, callback?) {

    if(!callback){
      console.log("IN NO callback for edit app state service")
      this.isEditing = true;
      this._formDataService.loadApp(_id);
      this._router.navigate(['./new/step1'])
    }/*
    else{
      console.log("IN callback for edit app state service")
      console.log(_id);
      console.log("Type of _id= " + typeof(_id));
      this.isEditing = true;
      this._formDataService.loadApp(_id);
      this._router.navigate(['./new/step1'])
      callback();
    }
    
    //let testId = "5acfbfbefd780421cfde71d5"

    //with matrix params
    //this._router.navigate(['./new/step1', {id: testId}])

    //with query params
    //this._router.navigate(['./new/step1'], {queryParams: {id: testId}})
    */
  }

  addApp(_id: string) {
    this.isEditing = false;
    //this._formDataService.createNewApp();
    this._formDataService.loadApp(_id);
    this._router.navigate(['./new/step1'])
  }
}
