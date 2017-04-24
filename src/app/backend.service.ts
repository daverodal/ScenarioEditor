import { Injectable } from '@angular/core';
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';
@Injectable()
export class BackendService {

  constructor(private http: Http) { }

  storeScenario(id, data,callback){


    const headers = new Headers;
    headers.append('Content-Type', 'application/json');
    let jsonData = JSON.stringify(data);
    return this.http.put('/rest/maps/'+id, jsonData)
      .subscribe(
        (data: any) => {
          console.log(data);
        },
        (data:any) =>{
          console.log('error');
        }
      )
  }

  getScenario(id){
    const headers = new Headers;

    debugger;
    headers.append('Content-Type', 'application/json');
    return this.http.get('/wargame/custom-scenario/6e3518f110c0b215b6b6ab8d691cb7cb')
      .map((response: Response) => {
      debugger;
        const data = response.json();
        return data;
      })

  }

}
