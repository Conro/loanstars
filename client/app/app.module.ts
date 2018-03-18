import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { ApplicationService } from './services/application.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AppComponent } from './app.component';
import { AppsComponent } from './apps/apps.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { MyAppsComponent } from './my-apps/my-apps.component';
import { FormNavbarComponent } from './form-navbar/form-navbar.component';
import { NewFormComponent } from './new-form/new-form.component';
import { Step1Component } from './new-form/step1/step1.component';
import { Step2Component } from './new-form/step2/step2.component';
import { Step3Component } from './new-form/step3/step3.component';
import { FormService } from './services/form.service';

@NgModule({
  declarations: [
    AppComponent,
    AppsComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    NotFoundComponent,
    TestComponent,
    Test2Component,
    MyAppsComponent,
    FormNavbarComponent,
    NewFormComponent,
    Step1Component,
    Step2Component,
    Step3Component
  ],
  imports: [
    RoutingModule,
    SharedModule
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    ApplicationService,
    UserService,
    FormService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
