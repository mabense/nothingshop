import { NONE_TYPE } from '@angular/compiler';
import { ElementRef, Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private sidenavRef?: MatSidenav;
  private text: String = "";

  public get navtext(): String {
    return this.text;
  }

  public set navtext(text: String) {
    this.text = text;
  }

  public set sidenav(sideNavId: MatSidenav) {
    this.sidenavRef = sideNavId;
  }

  public sidenavOpen() {
    /* */
    if (this.sidenavRef) {
      this.sidenavRef.toggle();
      console.log("Opened Sidenav:");
      console.log(this.sidenavRef);
    }
    else {
      console.log("Failed to open Sidenav:");
      console.log(this.sidenavRef);
    }
    /* */
  }

  public sidenavClose() {
    this.sidenavRef?.close();
  }

}
