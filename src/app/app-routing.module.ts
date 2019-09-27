import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    loadChildren:'src/app/LoginModule/login.module#LoginModule'
  },
  {
    path: "Registration",
    loadChildren:'src/app/LoginModule/login.module#LoginModule'
  },
  {
    path: "dashboard",
    loadChildren:'src/app/dashBoardModule/dash-board.module#DashBoardModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }