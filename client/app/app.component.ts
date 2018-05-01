import { NotificationService } from './services/notification.service';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from './services/auth.service';
import { routerTransition } from './animations/router.animations';
import { FormDataService } from './services/form-data.service';
import { Router } from '@angular/router';
import { StateService } from './services/state.service';
import { ApplicationService } from './services/application.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [routerTransition]
})
export class AppComponent implements OnInit {

  @Input() formData;
  currentPage;

  constructor(public auth: AuthService,
              private formDataService: FormDataService,
              private notificationService: NotificationService,
              private stateService: StateService,
              private router: Router,
              private appService: ApplicationService) { }

  ngOnInit() {

    this.appService.loadAll();
    //this.formData = this.formDataService.getFormData();
    this.notificationService.getAlexaStream().subscribe(result => {
      console.log("Socket emitted value: " + JSON.stringify(result));
      var data: any = result;
      //this.stateService.navigate(result);
      switch(data.location){
        case 'home': {
          this.router.navigate(['/']);
        }
        break;

        case 'profile': {
          this.router.navigate(['/account']);
        }
        break;

        case 'account': {
          this.router.navigate(['/account']);
        }
        break;

        case 'my apps': {
          this.router.navigate(['/my-apps']);
        }
        break;

        case 'my applications': {
          this.router.navigate(['/my-apps']);
        }
        break;

        case 'applications': {
          this.router.navigate(['/my-apps']);
        }
        break;

        case 'apps': {
          this.router.navigate(['/my-apps']);
        }
        break;

        case 'step 1': {
          this.router.navigate(['/new/step1']);
        }
        break;

        case 'step 2': {
          this.router.navigate(['/new/step2']);
        }
        break;

        case 'step 3': {
          this.router.navigate(['/new/step3']);
        }
        break;

        case 'loadapp': {
          this.stateService.editApp(data.app);
        }
        break;
      }
    })
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
