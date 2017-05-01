import { Component } from '@angular/core';
import {BackendService} from './backend.service';

@Component({
  selector: 'se-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  id: string;
  title = 'Scenario Editor';
  constructor(private be: BackendService) {
    this.id = window.location.pathname.replace(/^.*\//, '');
    be.url = this.id;
  }
}
