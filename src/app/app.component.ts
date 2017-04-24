import { Component } from '@angular/core';
import {BackendService} from "./backend.service";

@Component({
  selector: 'se-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  id : string;
  title = 'se works!';
  constructor(private be : BackendService){
    debugger;
    this.id = window.location.pathname;
    be.url = this.id;
  }
}
