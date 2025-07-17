import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusRoutesComponent } from 'src/app/view/information/bus-routes/bus-routes.component';
import { HolidaysComponent } from 'src/app/view/information/holidays/holidays.component';
import { InformationComponent } from 'src/app/view/information/information.component';
import { SchoolCalenderComponent } from 'src/app/view/information/school-calender/school-calender.component';
import { SlcComponent } from 'src/app/view/information/slc/slc.component';
import { UniformComponent } from 'src/app/view/information/uniform/uniform.component';
import { RouterModule } from '@angular/router';
import { TimingComponent } from 'src/app/view/information/timing/timing.component';
import { InformationRoutingModule } from './information-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {environment} from '../../../environments/environment';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    InformationComponent,
    SchoolCalenderComponent,
    BusRoutesComponent,
    UniformComponent,
    HolidaysComponent,
    SlcComponent,
    TimingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    InformationRoutingModule,
    Ng2SearchPipeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    PdfViewerModule
  ]
})
export class InformationModule { }
