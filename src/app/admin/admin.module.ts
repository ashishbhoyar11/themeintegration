import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddblogComponent } from './addblog/addblog.component';

@NgModule({
  declarations: [DashbordComponent, SidebarComponent, AddblogComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AdminRoutingModule
  ],
  exports:[
    DashbordComponent,
    AddblogComponent
  ]
})
export class AdminModule { }
