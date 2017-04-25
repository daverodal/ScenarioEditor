import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class BackendService {

  public url: string;
  constructor(private http: Http) { }

  storeScenario(id, data, callback) {


    const headers = new Headers;
    headers.append('Content-Type', 'application/json');
    const jsonData = JSON.stringify(data);
    return this.http.put('/wargame/custom-scenario/' + this.url, jsonData)
      .subscribe(
        (myData: any) => {
          console.log(myData);
        },
        (myData: any) => {
          console.log('error');
        }
      );
  }

  getScenario(id) {
    const headers = new Headers;

    debugger;
    headers.append('Content-Type', 'application/json');
    return this.http.get('/wargame/custom-scenario/' + this.url)
      .map((response: Response) => {
      debugger;
        const data = response.json();
        return data;
      });

  }

}
