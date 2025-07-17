import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeyondAcedemicComponent } from 'src/app/view/beyond-acedemic/beyond-acedemic.component';
import { ClubsComponent } from 'src/app/view/beyond-acedemic/clubs/clubs.component';
import { HouseComponent } from 'src/app/view/beyond-acedemic/house/house.component';
import { InterSchoolComponent } from 'src/app/view/beyond-acedemic/inter-school/inter-school.component';
import { SportsComponent } from 'src/app/view/beyond-acedemic/sports/sports.component';
import { StudentCouncilComponent } from 'src/app/view/beyond-acedemic/student-council/student-council.component';
import { ToursComponent } from 'src/app/view/beyond-acedemic/tours/tours.component';
import { RouterModule } from '@angular/router';
import { BeyondAcademicRoutingModule } from './beyond-academic-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AlumniMeetComponent } from 'src/app/view/beyond-acedemic/alumni-meet/alumni-meet.component';



@NgModule({
  declarations: [
    BeyondAcedemicComponent,
    HouseComponent,
    ClubsComponent,
    SportsComponent,
    ToursComponent,
    StudentCouncilComponent,
    InterSchoolComponent,
    AlumniMeetComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BeyondAcademicRoutingModule,
    PdfViewerModule
  ]
})
export class BeyondAcademicModule { }
