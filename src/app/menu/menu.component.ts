import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() currentPage: string = '';
  @Output() selectedPage: EventEmitter<string> = new EventEmitter();

  constructor(
    private router: Router
  ) {}

  getNavRoutes() {
    return this.router.config;
  }

  switch() {
    this.selectedPage.emit(this.currentPage);
  }
}
