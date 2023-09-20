import { Component, OnInit } from '@angular/core';
import { ROUTES, Route, Router } from '@angular/router';
import { NavService } from '../services/nav.service';
import { NavLink } from '../models/NavLink';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  template: ``,
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  protected titleSuffix = " - NothingShop";
  protected currentPage: string = "";

  private loggedInUser?: firebase.default.User | null;
  private loggedInSubscription?: Subscription;

  protected guestNavLinks: Array<NavLink> = [
    { name: 'login', display: 'Login' },
    { name: 'signup', display: 'Sign up' },
    { name: 'edit', display: 'Edit' },
    { name: 'list', display: 'List' },
    { name: 'product', display: 'Product' }
  ];
  protected userNavLinks: Array<NavLink> = [
    { name: 'logout', display: 'Logout', onClick: () => {this.auth.logout()} },
    { name: 'edit', display: 'Edit' },
    { name: 'list', display: 'List' },
    { name: 'product', display: 'Product' }
  ];

  constructor(
    protected auth: AuthService,
    protected router: Router,
    protected navService: NavService
  ) { }

  ngOnInit(): void {
    this.navService.pageGetCurrent().subscribe((events: any) => {
      this.currentPage = events as string;
    });
    this.loggedInSubscription = this.auth.isLoggedIn().subscribe(user => {
      this.loggedInUser = user;
    }, error => {
      console.error(error);
    });
  }

  ngOnDestroy() {
    this.loggedInSubscription?.unsubscribe();
  }

  getNavLinks() {
    let navLinkArray: Array<NavLink> = new Array();

    if (this.loggedInUser) {
      navLinkArray = this.userNavLinks;
    }
    else {
      navLinkArray = this.guestNavLinks;
    }

    this.prepareNavLinks(navLinkArray);
    return navLinkArray;
  }

  prepareNavLinks(navLinkArray: Array<NavLink>) {
    let routePaths: Array<string> = new Array();

    this.router.config.forEach(route => {
      if (route.path || route.path === "") {
        routePaths.push(route.path);
      }
    });

    navLinkArray.forEach(link => {
      if (link.name == this.currentPage) {
        link.action = 'current';
      }
      else if (routePaths.includes(link.name)) {
        link.action = 'route';
      }
      else if (link.onClick) {
        link.action = 'click';
      }
      else {
        link.action = '';
      }
    })
  }

  switch() {
    this.navService.pageSelect(this.currentPage);
  }
}


@Component({
  selector: 'app-nav-sidenav',
  templateUrl: './nav-sidenav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavSidenavComponent extends NavComponent {

  closeSidenav() {
    this.navService.sidenavClose();
  }
}


@Component({
  selector: 'app-nav-toolbar',
  templateUrl: './nav-toolbar.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavToolbarComponent extends NavComponent {

  openSidenav() {
    this.navService.sidenavOpen();
  }
}