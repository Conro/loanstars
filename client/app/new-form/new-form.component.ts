import { FormData } from './../shared/models/formData.model';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../animations/router.animations'
import { FormDataService } from '../services/form-data.service';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css'],
  animations: [routerTransition]
})
export class NewFormComponent implements OnInit {

  formData = null;

  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
