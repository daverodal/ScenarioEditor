import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'se-unit',
  templateUrl: './unit.component.html',
  styles: []
})
export class UnitComponent implements OnInit {

  @Input() parent: any;
  @Input() unit: any;
  constructor() { }

  ngOnInit() {
  }

  add() {
    this.unit.num++;
  }

  clone() {
    this.parent.clone(this.unit);
  }

  remove() {
    if (this.unit.num > 0) {
      this.unit.num--;
    }
  }
}
