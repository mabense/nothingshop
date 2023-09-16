import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm =  new FormGroup({
  username: new FormControl(""), 
  password: new FormControl("")
  });

  constructor(
    private router: Router
  ){ }

  login() {
    /* */
    let nameOk: boolean = this.loginForm.get("username")?.value === "a";
    let passOk: boolean = this.loginForm.get("password")?.value === "a";
    if (nameOk && passOk) {
      this.router.navigateByUrl("/list");
    }
    else {
      console.error("Wrong name or password!");
    }
    
    /*/
    let nameOk: boolean = this.username.value === "a";
    let passOk: boolean = this.password.value === "a";
    if (nameOk && passOk) {
      this.router.navigateByUrl("/edit");
    }
    else {
      console.error("Wrong name or password!");
    }
    /* */
  }
}
