import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { NavService } from './nav.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    protected navService: NavService, 
    private auth: AngularFireAuth
    ) { }

  isLoggedIn() {
    return this.auth.user;
  }

  async login(email: string, pass: string) {
    let credProm = this.auth.signInWithEmailAndPassword(email, pass);
    try {
      await credProm;
      this.navService.pageSelect('/list');
    } catch (error) {
      console.error(error);
    }
    return credProm;
  }

  async signup(email: string, pass: string, repass: string): Promise<Promise<any> | undefined> {
    if (pass === repass) {
      let credProm = this.auth.createUserWithEmailAndPassword(email, pass);
      try {
        await credProm;
        await this.logout();
        this.navService.pageSelect('/login');
      } catch (error) {
        console.error(error);
      }
      return credProm;
    }
    else {
      console.error('The passwords don\'t match!');
      return undefined;
    }
  }

  async logout() {
    try {
      await this.auth.signOut();
      console.log('Logged out successfully.');
    } catch (error) {
      console.error(error);
    }
  }
}
