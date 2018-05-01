import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from './form-data.service';
import { NotificationService } from './notification.service';

@Injectable()
export class StateService implements OnInit {

  isEditing: boolean
  state = "";

  constructor(private _router: Router, private _formDataService: FormDataService, private _notificationService: NotificationService) { }

  ngOnInit() {
  }
  /*
  navigate(result) {
    console.log("In state.navigate(), to =: " + result.location);
    switch(result.location){
      case 'home': {
        this._router.navigate(['/']);
      }
      break;
      case 'profile': {
        this._router.navigate(['/account']);
      }
      break;
      case 'loadapp': {
        this.editApp(result.app);
      }
      break;
    }
  }*/

  editApp(_id: string, callback?) {
    console.log("In State.Service.editApp()");
    this.isEditing = true;
    this._formDataService.loadApp(_id, () => {
      this._router.navigate(['./new/step1'])
      /*if(callback){
        callback();
      }*/
    });
    //this._router.navigate(['./new/step1'])

    //let testId = "5acc2001d7640804f412cc40"

    //with matrix params
    //this._router.navigate(['./new/step1', {id: testId}])

    //with query params
    //this._router.navigate(['./new/step1'], {queryParams: {id: testId}})
  }

  addApp(_id: string) {
    this.isEditing = false;
    //this._formDataService.createNewApp();
    this._formDataService.loadApp(_id);
    this._router.navigate(['./new/step1'])
  }
}
