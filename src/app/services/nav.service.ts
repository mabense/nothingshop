import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private sidenavRef?: MatSidenav;
  private _page = new BehaviorSubject<string>('');

  constructor(
    private router: Router
  ) { }

  public set sidenav(sideNavId: MatSidenav) {
    this.sidenavRef = sideNavId;
  }

  public sidenavOpen() {
    if (this.sidenavRef) {
      this.sidenavRef.toggle();
    }
  }

  public sidenavClose() {
    this.sidenavRef?.close();
  }

  public sidenavGetRef(sidenavRef: MatSidenav | undefined) {
    setTimeout((_: any) => {
      if (sidenavRef) {
        this.sidenav = sidenavRef;
      }
    });
  }

  public pageGetCurrent() {
    return this._page;
  }

  public pageSelect(selectedPage: string) {
    this.router.navigateByUrl(selectedPage);
  }

  public pageUpdateAfterNavigationEnd() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((events: any) => {
      this._page.next((events.urlAfterRedirects as string).split('/')[1] as string);
    })
  }

}
