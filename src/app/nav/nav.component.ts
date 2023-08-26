import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Input() currentPage: string = '';
  @Output() selectedPage: EventEmitter<string> = new EventEmitter();

  constructor(
    private router: Router
  ) { }

  getNavRoutes() {
    return this.router.config;
  }

  switch() {
    this.selectedPage.emit(this.currentPage);
  }
}


@Component({
  selector: 'app-nav-sidenav',
  template: `
  <mat-sidenav #sidenav>
    <mat-nav-list (click)="sidenav.close()">
      <ng-container *ngFor="let route of getNavRoutes()">
        <a mat-list-item routerLink="'/' + route.path">
          <span class="nav-text">{{route.path}}</span>
        </a>
      </ng-container>
    </mat-nav-list>
  </mat-sidenav>
  `,
  styleUrls: ['./nav.component.scss']
})
export class NavSidenavComponent extends NavComponent {
}


@Component({
  selector: 'app-nav-toolbar',
  template: `
  <mat-toolbar color="primary" class="primary-toolbar">
    <button mat-icon-button fxHide.gt-xs (click)="openSidenav()">
      <mat-icon>menu</mat-icon>
    </button>
    <div fxFlex fxLayoutAlign="space-between center" fxLayout fxHide.xs>
      <ng-container *ngFor="let route of getNavRoutes()">
        <ng-container *ngIf="route.path !== currentPage">
          <a *ngIf="route.path !== '' && route.path !== '**'" [routerLink]="'/' +  route.path">
            <div fxLayoutAlign="center center">
              <span class="nav-text">{{route.path}}</span>
            </div>
          </a>
        </ng-container>
        <ng-container *ngIf="route.path === currentPage">
          <a id="primary-toolbar-current">
            <div fxLayoutAlign="center center">
              <span class="nav-text">{{route.path}}</span>
            </div>
          </a>
        </ng-container>
      </ng-container>
    </div>
    <div fxFlex fxLayoutAlign="flex-end center">Demo Shop</div>
  </mat-toolbar>
  `,
  styleUrls: ['./nav.component.scss']
})
export class NavToolbarComponent extends NavComponent {
  @Output() onOpenSidenav: EventEmitter<boolean> = new EventEmitter();

  openSidenav() {
    this.onOpenSidenav.emit(true);
  }
}