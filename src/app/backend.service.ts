import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';
import * as _ from "lodash";

@Injectable()
export class BackendService {

  public url: string;
  public sName: string;
  constructor(private http: Http) { }

  storeScenario(id, data) {

    const headers = new Headers;
    headers.append('Content-Type', 'application/json');
    data.units = _.filter(data.units, (o: any) => o.num > 0);
    const jsonData = JSON.stringify(data);
    return this.http.put('/wargame/custom-scenario/' + this.url + '/' + this.sName, jsonData, {headers: headers})
      .subscribe(
        (myData: any) => {
          window.location.href = document.referrer;
        },
        (myData: any) => {
        }
      );
  }

  getScenario(id) {
    const headers = new Headers;

    headers.append('Content-Type', 'application/json');
    return this.http.get('/wargame/custom-scenario/' + this.url)
      .map((response: Response) => {
        const data = response.json();
        this.sName = data.sName;
        return data;
      });

  }

}
