import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { config, timeout } from 'rxjs';
import { AsynchronyService } from 'src/app/services/asynchrony.service';

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
    private router: Router, 
    protected asyncServ: AsynchronyService
  ) { }

  async login() {
    /* * /
    this.asyncServ.startLoading();
    await this.loadPromise();
    console.log("Done waiting.");
    let nameOk: boolean = this.loginForm.get("username")?.value === "a";
    let passOk: boolean = this.loginForm.get("password")?.value === "a";
    if (nameOk && passOk) {
      this.router.navigateByUrl("/list");
    }
    else {
      console.error("Wrong name or password!");
    }
    this.asyncServ.doneLoading();
    /*/
    this.asyncServ.loadDuring(this.asyncServ.waitSeconds(2));
    /* */
  }
}
