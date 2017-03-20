import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementComponent } from './element/element.component';
import {DocsRoutes} from "./docs.route";
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  imports: [
      CommonModule,
      DocsRoutes
  ],
  declarations: [ElementComponent, OverviewComponent]
})
export class DocsModule { }
