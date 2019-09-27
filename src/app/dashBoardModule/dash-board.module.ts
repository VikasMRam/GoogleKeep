import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { dashboardRoutingModule } from './dashBoard.routing.module';

import {FormsModule} from "@angular/forms"

@NgModule({
  imports: [
    CommonModule,dashboardRoutingModule,FormsModule
  ],
  declarations: [DashBoardComponent, NavBarComponent]
})
export class DashBoardModule { }
