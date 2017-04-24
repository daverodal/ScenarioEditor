import { Component, OnInit } from '@angular/core';
import {Unit} from "./unit";
import {BackendService} from "../backend.service";

@Component({
  selector: 'se-units-container',
  templateUrl: './units-container.component.html',
  styles: []
})
export class UnitsContainerComponent implements OnInit {

  wuv = 'jslsj'
  scenario :any = {};
  units :any[] = [];
  constructor(private backendService:BackendService) {
    this.units.push(new Unit('cav', 'cav', 3, 7, 3))
  }

  ngOnInit() {
    this.backendService.getScenario('jsj')
      .subscribe(
        (scenario: any) => {
          this.wuv = scenario.description
          this.scenario = scenario;
          debugger;
          console.log(scenario);
        },
        (data:any) =>{
          console.log('error');
        }
      );
  }

  publish(){
    this.backendService.storeScenario(1, this.scenario.units, ()=>{});
    console.log(this.scenario.units);
  }
}
