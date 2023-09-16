import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsynchronyService {
  private loading: number = 0;

  public isLoading(): boolean {
    return this.loading > 0;
  }

  public startLoading() {
    this.loading++;
  }

  public doneLoading() {
    this.loading--;
  }
}
