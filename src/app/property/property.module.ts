import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { PropertypageComponent } from './propertypage/propertypage.component';

@NgModule({
  declarations: [PropertypageComponent],
  imports: [
    CommonModule,
    PropertyRoutingModule
  ],
  exports:[
    PropertypageComponent
  ]
})
export class PropertyModule { }
