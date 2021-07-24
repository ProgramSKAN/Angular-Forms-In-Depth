import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from '../validators/password-strength.validator';


@Component({
  selector: 'login',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {
  /*
  name:new FormControl('',{validators:[Validators.required]});

  email=new FormControl('',{
      validators:[Validators.required, Validators.email],
      updatedOn:'blur'
  })

  form=new FormGroup({
    email:this.email,
    password:new FormControl('',{
      validators:[
        Validators.required,
        Validators.minLength(8),
        createPasswordStrengthValidator()
      ]
    })
  })

  OR in consice way use FORMBUILDER
   */

  form = this.fb.group({
    email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur' }],
    password: ['',
      [/*Synchronous validators*/Validators.required, Validators.minLength(8), createPasswordStrengthValidator()],
      [/*async validators */]
    ]
  });

  constructor(private fb: FormBuilder) {
    //using form build, we can also define individual control
    //fb.control(initialformvalue,validators)

  }

  ngOnInit() { }

  get email() {
    return this.form.controls['email'];
  }

  get password() {
    return this.form.controls['password'];
  }

}
