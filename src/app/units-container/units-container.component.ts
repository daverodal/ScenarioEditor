import {Component, OnInit} from '@angular/core';
import {Unit} from './unit';
import {BackendService} from '../backend.service';
import * as _ from "lodash";

@Component({
  selector: 'se-units-container',
  templateUrl: './units-container.component.html',
  styles: []
})
export class UnitsContainerComponent implements OnInit {

  scenario: any = {};
  units: any[] = [];
  nonStandard: Object = {};
  nonStandardKeys: any[] = [];

  constructor(private backendService: BackendService) {
  }

  clone(unit: any) {
    const newUnit = Object.assign({}, unit);
    this.scenario.units.push(newUnit);
  }

  ngOnInit() {
    this.backendService.getScenario('jsj')
      .subscribe(
        (scenario: any) => {

          this.scenario = scenario;
          const nonstandard = _.pickBy(scenario, (prop, key: string) => {
            return !['description', 'longDescription', 'id', 'sName', 'units'].includes(key);
          });
          console.log(this.scenario.units);
          this.scenario.units = _.map(scenario.units, (o: any) => {
            if (o.reinforceTurn === undefined) {
              o.reinforceTurn = 0;
            }
            return o;
          });
          console.log(this.scenario.units);

          this.nonStandard = nonstandard;
          this.nonStandardKeys = Object.keys(nonstandard);
        },
        (data: any) => {
        }
      );
  }

  cancel() {
    window.location.href = document.referrer;
  }

  publish() {
    this.scenario.units = _.map(this.scenario.units, (o: any) => {
      if (o.reinforceTurn == 0) {
        o.reinforceTurn = undefined;
      }
      return o;
    });
    this.backendService.storeScenario(1, this.scenario);
  }
}
