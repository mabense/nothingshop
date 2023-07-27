import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nothingshop';
  page: string = '';

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((events: any) => {
      this.page = (events.urlAfterRedirects as string).split('/')[1] as string;
    })
  }

  changePage(selectedPage: string) {
    this.router.navigateByUrl(selectedPage);
  }

  getNavRoutes() {
    return this.router.config;
  }
}