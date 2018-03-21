import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from './services/auth.service';
<<<<<<< HEAD
import { routerTransition } from './animations/router.animations'
=======
import { FormDataService } from './services/form-data.service';
>>>>>>> 183a18bedc9d199290542c9e81fdcad4ab87dcbd

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
