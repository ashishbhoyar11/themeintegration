import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertypageComponent } from './propertypage/propertypage.component';

const routes: Routes = [
  {
    path:'property',component:PropertypageComponent,
    children:[
      {path: 'tracks', component: PropertypageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
