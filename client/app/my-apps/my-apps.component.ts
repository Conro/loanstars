import { Application } from './../shared/models/appplication-models/application.model';
import { ApplicationService } from './../services/application.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { ToastComponent } from '../shared/toast/toast.component';
import { StateService } from '../services/state.service';
import { Step1, Step3 } from '../shared/models/appplication-models/steps.model';

@Component({
  selector: 'app-my-apps',
  templateUrl: './my-apps.component.html',
  styleUrls: ['./my-apps.component.css']
})
export class MyAppsComponent implements OnInit {

  app = new Application();
  apps: Observable<Application[]>;
  isLoading = false;
  isEditing = false;

  addAppForm: FormGroup;
  type = new FormControl('', Validators.required);
  currentStatus = new FormControl('', Validators.required);
  purchasePrice = new FormControl('', Validators.required);

  constructor(public appService: ApplicationService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent,
              private router: Router,
              private state: StateService,
              ) { }

  ngOnInit() {
    this.apps = this.appService.apps;
    this.appService.loadAll();

    //this.getApps();
    this.addAppForm = this.formBuilder.group({
      type: this.type,
      status: this.formBuilder.group({
        currentStatus: this.currentStatus
      }),
      step1: new Step1(),
      step2: this.formBuilder.group({
        purchasePrice: this.purchasePrice,
        agent: '',
        annualFlood: '',
        annualHazard: '',
        annualTaxes: '',
        downPayment: '',
        equity: '',
        homePlan: '',
        propertyAttached: '',
        propertyType: ''
      }),
      step3: new Step3()
    });
  }

  /*
  getApps() {
    this.appService.getApps().subscribe(
      data => this.apps = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }*/

  
  addAppFromTestHarness() {
    this.appService.create(this.addAppForm.value)
    console.log(this.addAppForm.value)
  }

  addApp(type?: string) {
    let tmpApp = new Application();
    tmpApp.type = type;
    tmpApp.step2.purchasePrice = "0";
    tmpApp.status.currentStatus = "incomplete";
    const self = this;
    this.appService.create(tmpApp, function(data){
      self.state.addApp(data._id)
    })
  }

  enableEditing(app: Application) {
    this.appService.isEditing = true;
    this.app = app;
  }

  cancelEditing() {
    this.appService.isEditing = false;
    this.app = new Application();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the apps to reset the editing
    //this.getApps();
  }

  quickEditApp(app: Application) {
    this.appService.update(app);

    /*
    this.appService.editApp(app).subscribe(
      () => {
        this.isEditing = false;
        this.app = app;
        this.toast.setMessage('Application edited successfully.', 'success');
      },
      error => console.log(error)
    );*/
  }

  deleteApp(app: Application) {
    if (window.confirm('Are you sure you want to permanently delete this application?')) {
      this.appService.remove(app);
    }
  }

  /*
  gotoEdit(_id: string) {
    this.router.navigate(['./new/step1', {id: _id}])
  }*/
}
