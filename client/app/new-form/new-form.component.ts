import { FormData } from './../shared/models/formData.model';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../animations/router.animations'
import { FormDataService } from '../services/form-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css'],
  animations: [routerTransition]
})
export class NewFormComponent implements OnInit {

  formData = null;

  constructor(private formDataService: FormDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();

    this.route.queryParams
      .subscribe(params => {
        console.log(params);
      });
  }

  getState(outlet) {
    //console.log("state set to: " + outlet.activatedRouteData.state);
    return outlet.activatedRouteData.state;
  }
}
