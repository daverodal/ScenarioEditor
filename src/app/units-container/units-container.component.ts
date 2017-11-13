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
  addKey = false;
  newKey = null;
  newValue = null;

  constructor(private backendService: BackendService) {
  }

  clone(unit: any) {
    debugger;
    const newUnit = Object.assign({}, unit);
    this.scenario.units.push(newUnit);
  }

  new() {
    const  nu = {class  :      "infantry",
      combat  :  5,
      deployed        :        true,
      forceId        :        1,
      movement        :        4,
      nationality        :        "NapAllied",
      num        :        8,
      range        :        1,
      reinforce: 'A'
    };
     const newUnit = Object.assign({}, nu);
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
              o.deployed = true;
            }else {
              o.deployed = false;
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

  addProperty() {
    this.addKey = true;
  }

  saveProperty() {
    this.addKey = false;
    this.scenario[this.newKey] = this.newValue;

    const nonstandard = _.pickBy(this.scenario, (prop, key: string) => {
      return !['description', 'longDescription', 'id', 'sName', 'units'].includes(key);
    });
    this.nonStandard = nonstandard;
    this.nonStandardKeys = Object.keys(nonstandard);

  }

  deleteProperty(key){
    delete this.scenario[key];

    const nonstandard = _.pickBy(this.scenario, (prop, key: string) => {
      return !['description', 'longDescription', 'id', 'sName', 'units'].includes(key);
    });
    this.nonStandard = nonstandard;
    this.nonStandardKeys = Object.keys(nonstandard);
  }
  publish() {
    this.scenario.units = _.map(this.scenario.units, (o: any) => {
      if (o.deployed === true) {
        o.reinforceTurn = undefined;
      }
      return o;
    });
    this.backendService.storeScenario(1, this.scenario);
  }
}
