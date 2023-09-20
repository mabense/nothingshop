import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsynchronyService {
  private loading: number = 0;

  public async loadDuring(prom: Promise<any>): Promise<any> {
    this.startLoading();
    try {
      await prom;
      this.doneLoading();
    } catch (error) {
      console.error(error);
      this.doneLoading();
    }
    return prom;
  }

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
