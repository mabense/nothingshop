import { Component, OnInit } from '@angular/core';
import { ROUTES, Route, Router } from '@angular/router';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-nav',
  template: ``,
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  protected titleSuffix = " - NothingShop";
  protected currentPage: string = "";
  protected navLinks: Map<string, [string, Route?]> = new Map([
    // ["", ["home"]],
    // ["**", ["not found"]],
    ["login", ["Login"]],
    ["signup", ["Sign up"]],
    ["edit", ["Edit"]],
    ["list", ["List"]],
    ["product", ["Product"]]
  ]);

  constructor(
    protected router: Router,
    protected navService: NavService
  ) { }

  ngOnInit(): void {
    this.navService.pageGetCurrent().subscribe((events: any) => {
      this.currentPage = events as string;
    })
  }

  getNavRoutes() {
    let navRoutes: Array<Route> = new Array();

    // Gether Routes
    this.router.config.forEach(route => {
      if (route.path || route.path === "") {
        let link = this.navLinks.get(route.path);
        if (link) {
          route.title = link[0] + this.titleSuffix;
          link[1] = route;
        }
      }
    });

    // Sort Routes
    this.navLinks.forEach(link => {
      if (link[1]) {
        navRoutes.push(link[1]);
      }
    });

    return navRoutes;
  }

  displayNavRouteText(route: Route): string {
    let displayText: string = "";

    let routeTitle = route.title as string;
    displayText = routeTitle.replace(this.titleSuffix, "");

    return displayText;
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