import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Input() currentPage: string = '';
  @Output() pageSelected: EventEmitter<string> = new EventEmitter();

  constructor(
    protected router: Router,
    protected navService: NavService
  ) { }

  getNavRoutes() {
    return this.router.config;
  }

  switch() {
    this.pageSelected.emit(this.currentPage);
  }
}


@Component({
  selector: 'app-nav-sidenav',
  template: `
      <mat-nav-list (click)="closeSidenav()"> <!--  -->
        <ng-container *ngFor="let route of getNavRoutes()">
          <ng-container *ngIf="route.path !== '' && route.path !== '**'">
            <ng-container *ngIf="route.path !== currentPage">
              <a mat-list-item [routerLink]="'/' +  route.path">
                <span class="nav-text">{{route.path}}</span>
              </a>
            </ng-container>
            <ng-container *ngIf="route.path === currentPage">
              <a mat-list-item>
                <span class="nav-text">{{route.path}}</span>
              </a>
            </ng-container>
          </ng-container>
        </ng-container>
      </mat-nav-list>
  `,
  styleUrls: ['./nav.component.scss']
})
export class NavSidenavComponent extends NavComponent {
  
  closeSidenav() {
    this.navService.sidenavClose();
  }
}


@Component({
  selector: 'app-nav-toolbar',
  template: `
  <mat-toolbar color="primary" class="primary-toolbar">
    <button  mat-icon-button fxHide.gt-xs (click)="openSidenav()">
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

  openSidenav() {
    this.navService.sidenavOpen();
  }
}