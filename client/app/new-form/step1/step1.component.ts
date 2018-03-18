import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  /*
  private formData: FormData = new FormData();

  testform = {
    firstName: this.formData.firstName,
    lastName: this.formData.lastName,
    email: this.formData.email
  }*/

  constructor() {
  }

  ngOnInit() {
    //this.personal = this.formDataService.getPersonal();
    console.log('Personal feature loaded!');
  }

  title = 'Please tell us about yourself.';
  //personal: Personal;
  form: any;

  /*
  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
          
      this.formDataService.setPersonal(this.personal);
      return true;
  }

  goToNext(form: any) {
      if (this.save(form)) {
          // Navigate to the work page
          this.router.navigate(['/work']);
      }
  }
  */

}
