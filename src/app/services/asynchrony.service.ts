import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsynchronyService {
  private loading: number = 0;

  public async loadDuring(prom: Promise<any>) {
    this.startLoading();
    await prom;
    this.doneLoading();
    //   
    // } catch (error) {
    //   console.error(error);
    //   this.doneLoading();
    // }
    // this.doneLoading();
  }

  public waitSeconds(seconds: number): Promise<number> {
    // TODO: remove this dummy function
    return new Promise((resolve, reject) => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        console.log("waited for: " + i + " seconds");
        if (i === seconds) {
          clearInterval(interval);
          resolve(i);
        }
      }, 1000);
    })
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
