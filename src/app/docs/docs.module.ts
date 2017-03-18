import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementComponent } from './element/element.component';
import {DocsRoutes} from "./docs.route";

@NgModule({
  imports: [
      CommonModule,
      DocsRoutes
  ],
  declarations: [ElementComponent]
})
export class DocsModule { }
