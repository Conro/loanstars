import { Step3Component } from './new-form/step3/step3.component';
import { Step2Component } from './new-form/step2/step2.component';
import { NewFormComponent } from './new-form/new-form.component';
import { Test2Component } from './test2/test2.component';
import { TestComponent } from './test/test.component';
import { MyAppsComponent } from './my-apps/my-apps.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppsComponent } from './apps/apps.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SuccessComponent } from './new-form/success/success.component';

import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { Step1Component } from './new-form/step1/step1.component';

const routes: Routes = [
  { path: '', component: AboutComponent, data: { state: 'about' } },
  { path: 'my-apps', component: MyAppsComponent, data: { state: 'my-apps' } },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin] },
  { path: 'new', component: NewFormComponent, canActivate: [AuthGuardLogin],
    children: [
      //{path: '', redirectTo: 'step1', pathMatch: 'full'},
      {path: 'step1', component: Step1Component, data: { state: 'step1' }},
      {path: 'step2', component: Step2Component, data: { state: 'step2' }},
      {path: 'step3', component: Step3Component, data: { state: 'step3' }},
      {path: 'success', component: SuccessComponent, data: { state: 'success' }}
    ] },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}


/*
{ path: 'new', component: NewFormComponent, canActivate: [AuthGuardLogin],
    children: [
      {path: '', redirectTo: 'step1', pathMatch: 'full'},
      {path: 'step1', component: Step1Component, data: { state: 'step1' } },
      {path: 'step1/:id', component: Step1Component, data: { state: 'step1' } },
      {path: 'step2', component: Step2Component, data: { state: 'step2' }},
      {path: 'step3', component: Step3Component, data: { state: 'step3' }},
      {path: 'success', component: SuccessComponent, data: { state: 'success' }}
    ] },
*/