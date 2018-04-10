import { FormDataService } from './form-data.service';
import { ToastComponent } from './../shared/toast/toast.component';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { GetStoredToken } from '../util'

import { Application } from '../shared/models/appplication-models/application.model';
import 'rxjs/add/operator/do';

@Injectable()
export class ApplicationService {

  isEditing: boolean = false;
  isLoading: boolean = true;
  apps: Observable<Application[]>
  private _apps: BehaviorSubject<Application[]>;
  private dataStore: {
    apps: Application[]
  };

  constructor(private http: HttpClient, private toast: ToastComponent) {
    this.dataStore = { apps: [] };
    this._apps = <BehaviorSubject<Application[]>>new BehaviorSubject([]);
    this.apps = this._apps.asObservable();
  }

  loadAll() {
    if (this.dataStore.apps.length === 0){
      this.isLoading = true;
          this.http.get('/api/apps' + GetStoredToken()).subscribe((data: Application[]) => {
            this.dataStore.apps = data;
            this._apps.next(Object.assign({}, this.dataStore).apps);
            this.isLoading = false;
          }, error => this.toast.setMessage('Error: Loading Applications.', 'warning'));
    }
  }


  load(app: Application) {
    //return this.http.get<Application>(`/api/app/${app._id}`);
    this.http.get(`/api/app/${app._id}`).subscribe((data: Application) => {
      let notFound = true;

      this.dataStore.apps.forEach((item, index) => {
        if (item._id === data._id) {
          this.dataStore.apps[index] = data;
          notFound = false;
        }
      });

      if (notFound) {
        this.dataStore.apps.push(data);
      }

      this._apps.next(Object.assign({}, this.dataStore).apps);
    }, error => console.log('Could not load todo.'));
  }

  create(app: Application, callback?) {
    //return this.http.post<Application>('/api/app' + GetStoredToken(), application);
    this.http.post<Application>('/api/app' + GetStoredToken(), app).subscribe((data: Application) => {
      
      this.dataStore.apps.push(data);
      this._apps.next(Object.assign({}, this.dataStore).apps);
      this.toast.setMessage('Application added successfully.', 'success');
      callback(data);
      
    }, error => this.toast.setMessage('Error: Application not added successfully.', 'warning'));
  }

  update(app: Application) {
    //return this.http.put(`/api/app/${application._id}`, application, { responseType: 'text' });
    this.http.put(`/api/app/${app._id}`, app, { responseType: 'text' }).subscribe((data: any) => {
      this.dataStore.apps.forEach((t, i) => {
        if (t._id === data._id) { this.dataStore.apps[i] = data; }
      });
      this.toast.setMessage('Application updated successfully.', 'success');
      this.isEditing = false;
      this._apps.next(Object.assign({}, this.dataStore).apps);
    }, error => this.toast.setMessage('Error: Application not update unsuccessfull.', 'warning'));
  }

  remove(app: Application) {
    this.http.delete(`/api/app/${app._id}`, { responseType: 'text' }).subscribe(response => {
      this.dataStore.apps.forEach((t, i) => {
        if (t._id === app._id) { this.dataStore.apps.splice(i, 1); }
      });
      this.toast.setMessage('Application deleted successfully.', 'success');
      this._apps.next(Object.assign({}, this.dataStore).apps);
    }, error => this.toast.setMessage('Error: Application deletion unsuccessfull.', 'warning'));
  }
/*
  /*
  currentApps: Application[]

  constructor(private http: HttpClient) { 
    this.currentApps = [];
  }

  ngOnInit(){

  }

  getApps(): Application[] {
    if (this.currentApps.length !== 0) {
      console.log("We have the data, returning it...")
      return this.currentApps
    }
    else{
      this.loadApps().subscribe(
        data => {
          console.log("We don't have the data...getting it and storing it...")
          this.currentApps = data
          return this.currentApps;
        },
        error => console.log(error)
      );
    }
  }

  loadApps(): Observable<Application[]> {
    return this.http.get<Application[]>('/api/apps' + GetStoredToken());
  }

  countApps(): Observable<number> {
    return this.http.get<number>('/api/apps/count');
  }

  addApp(application: Application): Observable<Application> {
    this.currentApps.push(application);
    return this.http.post<Application>('/api/app' + GetStoredToken(), application);
  }

  getApp(application: Application): Observable<Application> {
    return this.http.get<Application>(`/api/app/${application._id}`);
  }

  editApp(application: Application): Observable<string> {
    return this.http.put(`/api/app/${application._id}`, application, { responseType: 'text' });
  }

  deleteApp(application: Application): Observable<string> {
    const pos = this.currentApps.map(elem => elem._id).indexOf(application._id);
    this.currentApps.splice(pos, 1);
    return this.http.delete(`/api/app/${application._id}`, { responseType: 'text' });
  } */

}
