import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AsynchronyService } from 'src/app/services/asynchrony.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signUpForm = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
    repass: new FormControl("")
  });

  constructor(
    protected asyncServ: AsynchronyService, 
    private auth: AuthService
  ) {}

  signup() {
    this.asyncServ.loadDuring((async (): Promise<any> => {
      return this.auth.signup(
        (this.signUpForm.get('username')?.value as string) + 'a@a.aa', 
        (this.signUpForm.get('password')?.value as string) + 'asdasd', 
        (this.signUpForm.get('repass')?.value as string) + 'asdasd');
    })()).then(cred => {
      console.log(cred);
    });
  }
}
