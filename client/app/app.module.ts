import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { FormDataService } from './services/form-data.service';
import { FormFlowService } from './services/form-flow.service/form-flow.service';
import { SuccessComponent } from './new-form/success/success.component';
import { StateService } from './services/state.service';
import { StatusComponent } from './shared/components/status/status.component';
import { PatternValidator } from '@angular/forms';

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
    Step3Component,
    SuccessComponent,
    StatusComponent
  ],
  imports: [
    RoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    ApplicationService,
    UserService,
    FormDataService,
    FormFlowService,
    StateService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
