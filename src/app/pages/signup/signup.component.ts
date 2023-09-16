import { Component } from '@angular/core';
import { AsynchronyService } from 'src/app/services/asynchrony.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(
    protected asyncServ: AsynchronyService
  ) {}

  signup() {
    this.asyncServ.loadDuring(this.asyncServ.waitSeconds(2));
  }
}
