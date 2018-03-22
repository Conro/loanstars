import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GetStoredToken } from '../util'

import { Application } from '../shared/models/application.model';
import { app } from '../../../server/app';

@Injectable()
export class ApplicationService {

  constructor(private http: HttpClient) { }

  

  getApps(): Observable<Application[]> {
    return this.http.get<Application[]>('/api/apps' + GetStoredToken());
  }

  countApps(): Observable<number> {
    return this.http.get<number>('/api/apps/count');
  }

  addApp(application: Application): Observable<Application> {
    return this.http.post<Application>('/api/app' + GetStoredToken(), application);
  }

  getApp(application: Application): Observable<Application> {
    return this.http.get<Application>(`/api/app/${application._id}`);
  }

  editApp(application: Application): Observable<string> {
    return this.http.put(`/api/app/${application._id}`, application, { responseType: 'text' });
  }

  deleteApp(application: Application): Observable<string> {
    return this.http.delete(`/api/app/${application._id}`, { responseType: 'text' });
  }

}
