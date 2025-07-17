import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from 'src/app/view/about-us/about-us.component';
import { AffilationComponent } from 'src/app/view/about-us/affilation/affilation.component';
import { ChairmanComponent } from 'src/app/view/about-us/chairman/chairman.component';
import { FacultyComponent } from 'src/app/view/about-us/faculty/faculty.component';
import { ManagerComponent } from 'src/app/view/about-us/manager/manager.component';
import { PrimaryComponent } from 'src/app/view/about-us/primary/primary.component';
import { PrincipalComponent } from 'src/app/view/about-us/principal/principal.component';
import { SeniorComponent } from 'src/app/view/about-us/senior/senior.component';
import { VissionComponent } from 'src/app/view/about-us/vission/vission.component';
import { RouterModule } from '@angular/router';
import { AboutRoutingModule } from './about-routing.module';
import { AboutMaapsComponent } from 'src/app/view/about-us/about-maaps/about-maaps.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';



@NgModule({
  declarations: [
    AboutUsComponent, 
    VissionComponent,
    ChairmanComponent,
    ManagerComponent,
    PrincipalComponent,
    SeniorComponent,
    PrimaryComponent,
    FacultyComponent,
    AffilationComponent,
    AboutMaapsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AboutRoutingModule,
    PdfViewerModule
    
  ]
})
export class AboutModule { }
