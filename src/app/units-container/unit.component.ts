import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'se-unit',
  templateUrl: './unit.component.html',
  styles: []
})
export class UnitComponent implements OnInit {

  @Input() unit: any;
  constructor() { }

  ngOnInit() {
  }

  add() {
    this.unit.num++;
  }

  remove() {
    if (this.unit.num > 0) {
      this.unit.num--;
    }
  }
}
