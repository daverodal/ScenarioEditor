import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UnitsContainerComponent } from './units-container/units-container.component';
import { UnitComponent } from './units-container/unit.component';
import {BackendService} from './backend.service';
import { UnitEditorComponent } from './units-container/unit-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    UnitsContainerComponent,
    UnitComponent,
    UnitEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
