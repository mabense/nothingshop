import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { NavService } from './services/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nothingshop';
  page: string = '';
  @ViewChild("sidenav") sidenavRef?: MatSidenav;

  constructor(
    private router: Router, 
    private navService: NavService
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((events: any) => {
      this.page = (events.urlAfterRedirects as string).split('/')[1] as string;
    })
  }

  ngAfterViewInit() {
    setTimeout((_: any) => {
      console.log("SIDE NAV: ");
      console.log(this.sidenavRef);
      if (this.sidenavRef) {
        /* * /
        this.sidenavRef?.toggle();
        /*/
        this.navService.sidenav = this.sidenavRef;
        /* */
      }
    });
  }

  changePage(selectedPage: string) {
    this.router.navigateByUrl(selectedPage);
  }

  getNavRoutes() {
    return this.router.config;
  }
}