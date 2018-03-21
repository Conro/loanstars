import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from './services/auth.service';
import { routerTransition } from './animations/router.animations'
import { FormDataService } from './services/form-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [routerTransition]
})
export class AppComponent implements OnInit {

  @Input() formData;

  constructor(public auth: AuthService, private formDataService: FormDataService) { }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
