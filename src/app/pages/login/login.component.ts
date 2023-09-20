import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AsynchronyService } from 'src/app/services/asynchrony.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  });

  constructor(
    protected asyncServ: AsynchronyService, 
    private auth: AuthService
  ) { }

  async login() {
    this.asyncServ.loadDuring((async (): Promise<any> => {
      return this.auth.login(
        (this.loginForm.get('username')?.value as string) + 'a@a.aa', 
        (this.loginForm.get('password')?.value as string) + 'asdasd');
    })()).then(cred => {
      console.log(cred);
    });
  }
}
