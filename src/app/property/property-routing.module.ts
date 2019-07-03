import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertypageComponent } from './propertypage/propertypage.component';
import { PropertylistComponent } from './propertylist/propertylist.component';

const routes: Routes = [
  {
    path:'property',component:PropertypageComponent,
    children:[
      {path: 'tracks', component: PropertylistComponent}
    ]
  }
  //{path:'property/tracks',component:PropertylistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
