import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavService } from './services/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nothingshop';
  @ViewChild("sidenav") sidenavRef?: MatSidenav;

  constructor(
    private navService: NavService
  ) { }

  ngOnInit(): void {
    this.navService.pageUpdateAfterNavigationEnd();
  }

  ngAfterViewInit() {
    this.navService.sidenavGetRef(this.sidenavRef);
  }

}