import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { NavComponent, NavSidenavComponent, NavToolbarComponent } from './nav/nav.component';

// import { MenuComponent } from './menu/menu.component';
// import { NavModule } from './nav/nav.module';

@NgModule({
  declarations: [
    // MenuComponent,
    NavComponent, 
    NavSidenavComponent, 
    NavToolbarComponent,
    
    AppComponent
  ],
  imports: [
    // NavModule,

    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
