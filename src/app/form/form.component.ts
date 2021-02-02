import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  
  submitted = false;
  profileForm = new FormGroup({
  username: new FormControl('',[Validators.required]),
  email: new FormControl('',[Validators.required, Validators.email]),
  gender: new FormControl('',[Validators.required]),
  avatar: new FormControl('',[Validators.required]),
  mobile: new FormControl('',[Validators.required ]), //,Validators.min(10), Validators.max(10)
  password: new FormControl('',[Validators.required]),
  passwordConfirm: new FormControl('',[Validators.required]),
  },);
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {}

  get f() { return this.profileForm.controls; }
  
  onSubmit() {
    // if ( this.submitted == true) {
    //   console.log("Form Submitted!");
    //   this.form.reset();
    // }
  }
  

}


export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}
