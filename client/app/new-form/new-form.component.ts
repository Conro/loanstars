import { StateService } from './../services/state.service';
import { FormData } from './../shared/models/formData.model';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../animations/router.animations'
import { FormDataService } from '../services/form-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css'],
  animations: [routerTransition]
})
export class NewFormComponent implements OnInit {

  appData = null;

  constructor(private formDataService: FormDataService, private route: ActivatedRoute, private stateService: StateService) {
  }

  ngOnInit() {

    let paramId = this.route.firstChild.snapshot.params['id'];
    let queryId = this.route.firstChild.snapshot.queryParams['id'];
    
    
    //for params
    
    if(paramId){
      console.log("We got an ID passed to the edit form page: " + paramId)   
      //this.formDataService.loadApp(paramId) 
      this.stateService.editApp(paramId);
      //this.appData = this.formDataService.getFormData();
    }
    else if(queryId){
      console.log("We got an ID QUERY passed to the edit form page: " + paramId) 
      this.stateService.editApp(queryId);
    }
    else{
      console.log("No id passed")
      //this.appData = this.formDataService.getFormData();
    }

    /*
    //for query string
    if(queryId){
      console.log("we got query params: " + queryId);
      this.appData = this.formDataService.getFormData();
    }
    else{
      console.log("no query params were sent: ");
      this.appData = this.formDataService.getFormData();
    }*/
    

    

/*
    this.route.params.subscribe(params => {
        }
      });*/
  }

  getState(outlet) {
    //console.log("state set to: " + outlet.activatedRouteData.state);
    return outlet.activatedRouteData.state;
  }

  test(){
    this.formDataService.resetFormData();
  }
}
