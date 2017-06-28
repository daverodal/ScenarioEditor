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

  ngOnInit() {
    const nonstandard = _.pickBy(this.unit, (prop, key: string) => {
      return !['num', 'combat', 'movement', 'range', 'class'].includes(key);
    });
    debugger;
    this.nonStandard = nonstandard;
    this.nonStandardKeys = Object.keys(nonstandard);
  }

}
