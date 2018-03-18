import { Application } from './../shared/models/application.model';
import { ApplicationService } from './../services/application.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-my-apps',
  templateUrl: './my-apps.component.html',
  styleUrls: ['./my-apps.component.css']
})
export class MyAppsComponent implements OnInit {

  app = new Application();
  apps: Application[] = [];
  isLoading = true;
  isEditing = false;

  addAppForm: FormGroup;
  name = new FormControl('', Validators.required);

  constructor(private appService: ApplicationService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent) { }

  ngOnInit() {
    this.getApps();
    this.addAppForm = this.formBuilder.group({
      name: this.name,
    });
  }

  getApps() {
    this.appService.getApps().subscribe(
      data => this.apps = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addApp() {
    this.appService.addApp(this.addAppForm.value).subscribe(
      res => {
        this.apps.push(res);
        this.addAppForm.reset();
        this.toast.setMessage('Application added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(app: Application) {
    this.isEditing = true;
    this.app = app;
  }

  cancelEditing() {
    this.isEditing = false;
    this.app = new Application();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the apps to reset the editing
    this.getApps();
  }

  editApp(app: Application) {
    this.appService.editApp(app).subscribe(
      () => {
        this.isEditing = false;
        this.app = app;
        this.toast.setMessage('Application edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteApp(app: Application) {
    if (window.confirm('Are you sure you want to permanently delete this application?')) {
      this.appService.deleteApp(app).subscribe(
        () => {
          const pos = this.apps.map(elem => elem._id).indexOf(app._id);
          this.apps.splice(pos, 1);
          this.toast.setMessage('Application deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
