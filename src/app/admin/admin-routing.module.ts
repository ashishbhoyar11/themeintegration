import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AddblogComponent } from './addblog/addblog.component';
import { AuthGuard } from '../auth.guard';

//------- Refer for parent child routes ----------
//https://itnext.io/child-routes-with-respective-components-in-angular-4-36f1be42278e

const routes: Routes = [
  {
    path:'blog',
    children:[
      { path:'addblog',component:AddblogComponent,canActivate: [AuthGuard]}
    ]
  },
  { path:'dashbord',component:DashbordComponent,canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
