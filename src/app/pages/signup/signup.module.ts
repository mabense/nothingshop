import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 

    CommonModule,
    SignupRoutingModule
  ]
})
export class SignupModule { }
