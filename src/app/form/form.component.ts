import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
class Signup {
  constructor(public username: string = '',
              public gender: string = '',
              public email: string = '',
              public password: string = '',
              public mobile: string = '') {
  }
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  email: any;
  model: Signup = new Signup();

  profileForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    maleGender: new FormControl('',[Validators.required]),
    femaleGender: new FormControl('',[Validators.required]),
    avatar: new FormControl('',[Validators.required]),
    mobile: new FormControl('',[Validators.required , Validators.min(10), Validators.max(10)]),
    password: new FormControl('',[Validators.required]),
    passwordConfirm: new FormControl('',[Validators.required]),
  });
  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('f') form: any;

  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      this.form.reset();
    }
  }

}
