import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  login(email: string, pass: string) {
    return this.auth.signInWithEmailAndPassword(email, pass);
  }

  signup(email: string, pass: string, repass: string): Promise<any> | undefined {
    if(pass === repass) {
      return this.auth.createUserWithEmailAndPassword(email, pass);
    }
    else {
      console.error('The passwords don\'t match!');
      return undefined;
    }
  }
}
