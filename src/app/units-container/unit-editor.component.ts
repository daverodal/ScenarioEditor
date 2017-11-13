import {Component, Input, OnInit} from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'se-unit-editor',
  templateUrl: './unit-editor.component.html',
  styles: []
})
export class UnitEditorComponent implements OnInit {

  show = false;
  nonStandard;
  nonStandardKeys: any[] = [];
  @Input() unit: any;
  constructor() { }

  iClick (unit) {
    if (unit.deployed) {
      console.log("This part! ");
      console.log(unit.reinforceTurn);
      if (unit.reinforceTurn === undefined) {
        unit.reinforceTurn = 1;
        console.log(unit.reinforceTurn);
      }
    } else {
      delete unit.reinforceTurn;
    }
    console.log("i click "+unit.deployed);
  }
  ngOnInit() {
    const nonstandard = _.pickBy(this.unit, (prop, key: string) => {
      return !['num', 'combat', 'movement', 'range', 'class'].includes(key);
    });
    this.nonStandard = nonstandard;
    this.nonStandardKeys = Object.keys(nonstandard);
  }

}
