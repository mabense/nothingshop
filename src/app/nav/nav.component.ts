import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

}


@Component({
  selector: 'app-nav-sidenav',
  template: `
  <p>SIDENAV!!!!</p>
  `,
  styleUrls: ['./nav.component.scss']
})
export class NavSidenavComponent extends NavComponent {

}


@Component({
  selector: 'app-nav-toolbar',
  template: `
  <p>TOOLBAR!!!!</p>
  `,
  styleUrls: ['./nav.component.scss']
})
export class NavToolbarComponent extends NavComponent {

}