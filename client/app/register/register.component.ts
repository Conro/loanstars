import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators, PatternValidator } from '@angular/forms';

import { UserService } from '../services/user.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  emailregEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
  registerForm: FormGroup;
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100),
    Validators.pattern(this.emailregEx)
  ]);
  zipcode = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(5)
  ]);
  city = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);
  state = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(100)
  ]);
  firstName = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);
  middleName = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);
  lastName = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);
  dob = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);
  primaryPhone = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);
  primaryPhoneType = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
  role = new FormControl('', [
    Validators.required
  ]);

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              public toast: ToastComponent,
              private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      dob: this.dob,
      primaryPhone: this.primaryPhone,
      primaryPhoneType: this.primaryPhoneType,
      city: this.city,
      state: this.state,
      zipCode: this.zipcode,
      username: this.username,
      email: this.email,
      password: this.password,
      role: this.role
    });
  }
  autofill(){
    
      this.firstName.setValue("Marcus"),
      this.middleName.setValue("Layton"),
      this.lastName.setValue("Cunico"),
      this.dob.setValue("12/25/1994"),
      this. primaryPhone.setValue("4803476454"),
      this.primaryPhoneType.setValue("Cell"),
      this.city.setValue("Tempe")
      this.state.setValue("AZ"),
      this.zipcode.setValue("85000"),
      this.username.setValue("mcunico"),
      this.email.setValue("mcunico25@gmail.com"),
      this.role.setValue("admin")
    
  }
  register() {
    this.userService.register(this.registerForm.value).subscribe(
      res => {
        this.toast.setMessage('You successfully registered!', 'success');
        this.router.navigate(['/login']);
      },
      error => this.toast.setMessage('Email already exists', 'danger')
    );
  }
}
