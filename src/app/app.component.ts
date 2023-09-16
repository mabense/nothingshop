import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavService } from './services/nav.service';
import { AuthService } from './services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nothingshop';
  @ViewChild("sidenav") sidenavRef?: MatSidenav;

  private loggedInUser?: firebase.default.User | null;
  private loggedInSubscription?: Subscription;

  constructor(
    private auth: AuthService, 
    private navService: NavService
  ) { }

  ngOnInit(): void {
    this.navService.pageUpdateAfterNavigationEnd();
    this.loggedInSubscription = this.auth.isLoggedIn().subscribe(user => {
      this.loggedInUser = user;
    }, error => {
      console.error(error);
    });
  }

  ngAfterViewInit() {
    this.navService.sidenavGetRef(this.sidenavRef);
  }

  ngOnDestroy() {
    this.loggedInSubscription?.unsubscribe();
  }

}