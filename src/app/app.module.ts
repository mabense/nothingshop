import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule } from "@angular/fire/compat";

import { NavComponent, NavSidenavComponent, NavToolbarComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgArrayPipesModule } from 'ngx-pipes';

@NgModule({
  declarations: [
    NavComponent, 
    NavSidenavComponent, 
    NavToolbarComponent,

    AppComponent
  ],
  imports: [
    FormsModule,
    FlexLayoutModule,
    NgArrayPipesModule, 

    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    /* */
    AngularFireModule.initializeApp(environment.firebase), 
    /*/
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    /* */
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
