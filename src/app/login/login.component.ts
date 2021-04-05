import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { User } from './model/user';

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authent: AuthenticationService, private router: Router) {
    this.loginForm = new FormGroup(
      {
        login: new FormControl('', [Validators.required, Validators.minLength(3)]),
        password: new FormControl('', [Validators.required, passwordValidator])
      }
    );

    this.authent.logout(); // to help us develop: if we write the url ourselves, we erase login info
   }

  ngOnInit(): void {
  }

  onSubmit(): void {

    //const user = this.authent.authentUser(this.loginForm.value.login, this.loginForm.value.password);
    this.authent.authentUser(this.loginForm.value.login, this.loginForm.value.password)
    .subscribe(
      (user : User) => {  this.router.navigateByUrl('/home') },
      (error) =>{ alert('enlève tes moufles!') },
      () => { console.log('complete') }
    )
  }
}


// only use this here, otherwise, create a new file/component and import it where needed
function passwordValidator(control: AbstractControl) : ValidationErrors | null {
  if (control.value.length < 5) {
    return {
      length5Error: true
    };
  }

  return null;
}
