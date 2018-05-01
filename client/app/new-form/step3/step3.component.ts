import { FormDataService } from './../../services/form-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Step3 } from '../../shared/models/appplication-models/steps.model';
import { Status } from '../../shared/models/appplication-models/status.model';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {

  constructor(private router: Router, private formDataService: FormDataService) { }

  title = 'Your Finances.';
  step3: Step3;
  status: Status;
  form: any;
  ngOnInit() {
    this.step3 = this.formDataService.getStep3();
    console.log(this.step3);
  }

  save(form: any): boolean {
    if (!form.valid) {
        return false;
    }
        
    this.formDataService.setStep3(this.step3);
    return true;
  }

  quickSave(form: any) {
    this.formDataService.setStep3(this.step3);
  }

  goToNext(form: any) {
    console.log(form);
    if (this.save(form)) {
        // Navigate to the work page
        this.formDataService.setStatus('completed');
        this.router.navigate(['./new/success']);
    }  
  }
}
