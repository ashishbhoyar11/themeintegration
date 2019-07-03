import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PropertyRoutingModule } from './property-routing.module';
import { PropertypageComponent } from './propertypage/propertypage.component';
import { PropertylistComponent } from './propertylist/propertylist.component';

@NgModule({
  declarations: [PropertypageComponent, PropertylistComponent],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    CommonModule,
    PropertyRoutingModule
  ],
  exports:[
    PropertypageComponent,
    PropertylistComponent
  ]
})
export class PropertyModule { }
