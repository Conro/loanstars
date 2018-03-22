import { FormDataService } from './../../services/form-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Step2 } from '../../shared/models/formData.model';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

	title = 'Property & Loan Information'
	step2: Step2;
	form: any;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
  	 this.step2 = this.formDataService.getStep2();
     console.log(this.step2)
  }

    save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
          
      this.formDataService.setStep2(this.step2);
      return true;
  }

    goToNext(form: any) {
    console.log(form);
      if (this.save(form)) {
          // Navigate to the work page
          this.router.navigate(['/new/step3']);
      }
  }

}
