import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-nav',
  template: ``,
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  protected currentPage: string = "";

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
    return this.router.config;
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