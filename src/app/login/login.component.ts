import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  initialFormValue = {
    email2: 'initialemail@gmail.com',
    password2: '1234'
  }

  val = {
    email: "hello@gmail.com",
    password: "123456"
  };

  constructor() { }

  ngOnInit() { }

  login(loginForm: NgForm, submit) {
    //subject > native html subject event
    console.log(loginForm.value, loginForm.valid, submit);

    console.log("val", this.val);
    console.log(this.initialFormValue);
    //initialFormValue is showed in html with [ngModel].edits shows only in formvalue not in object.
    //edis will only get to object only with [(ngModel)]

    //prefer using loginForm.value instead of initialFormValue object

  }


  onEmailChange(change) {
    console.log(change)
  }

}
