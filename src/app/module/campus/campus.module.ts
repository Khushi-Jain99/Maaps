import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampusComponent } from 'src/app/view/campus/campus.component';
import { FacilityComponent } from 'src/app/view/campus/facility/facility.component';
import { SafetyComponent } from 'src/app/view/campus/safety/safety.component';
import { RouterModule } from '@angular/router';
import { CampusRoutingModule } from './campus-routing.module';
import { ComputerComponent } from 'src/app/view/campus/facility/computer/computer.component';
import { MathComponent } from 'src/app/view/campus/facility/math/math.component';
import { SocialScienceComponent } from 'src/app/view/campus/facility/social-science/social-science.component';
import { ActivityRoomComponent } from 'src/app/view/campus/facility/activity-room/activity-room.component';
import { LibraryComponent } from 'src/app/view/campus/facility/library/library.component';



@NgModule({
  declarations: [
    CampusComponent,
    SafetyComponent,
    FacilityComponent,
    SocialScienceComponent,
    MathComponent,
    ComputerComponent,
    LibraryComponent,
    ActivityRoomComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CampusRoutingModule
  ]
})
export class CampusModule { }
