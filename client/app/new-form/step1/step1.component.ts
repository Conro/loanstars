import { FormDataService } from './../../services/form-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Step1 } from '../../shared/models/appplication-models/steps.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  title = 'Please tell us about yourself.';
  step1: Step1;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
     this.step1 = this.formDataService.getStep1();
     console.log(this.step1)

     this.activatedRoute.params.subscribe(params => {
        if(params['id']) {
          console.log(params['id']);
        }
      });
  }

  
  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
          
      this.formDataService.setStep1(this.step1);
      return true;
  }

  quickSave(form: any) {
    this.formDataService.setStep1(this.step1);
  }

  goToNext(form: any) {
    console.log(form);
      if (this.save(form)) {
          // Navigate to the work page
          this.router.navigate(['./new/step2']);
      }
  }
  
}

