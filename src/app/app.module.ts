import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdButtonModule } from '@angular2-material/button';
import { MdButtonToggleModule } from '@angular2-material/button-toggle';
import { MdCardModule } from '@angular2-material/card';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdGridListModule } from '@angular2-material/grid-list';
import { MdIconModule } from '@angular2-material/icon';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { MdMenuModule } from '@angular2-material/menu';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { MdRadioModule } from '@angular2-material/radio';
import { MdSidenavModule } from '@angular2-material/sidenav';
// import { MdSlideToggleModule } from '@angular2-material/slide-toggle';
// import { MdSliderModule } from '@angular2-material/slider';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdTooltipModule } from '@angular2-material/tooltip';

import { PolymerElement } from '@vaadin/angular2-polymer';

import { Angular2DataTableModule } from 'angular2-data-table';

import {
  MdlDirective,
  AngularMaterialComponent,
  DataTableComponent,
  WebElementsComponent
} from './shared';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularMaterialComponent,
    DataTableComponent,
    WebElementsComponent,
    MdlDirective,
    PolymerElement('paper-dropdown-menu'),
    PolymerElement('paper-toast'),
    PolymerElement('paper-dialog'),
    PolymerElement('vaadin-grid')
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdProgressBarModule,
    MdProgressCircleModule,
    MdRadioModule,
    MdSidenavModule,
    // MdSlideToggleModule,
    // MdSliderModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    MdGridListModule,
    Angular2DataTableModule
  ],
  providers: [

  ],
  entryComponents: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
