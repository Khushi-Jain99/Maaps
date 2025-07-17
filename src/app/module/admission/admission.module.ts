import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdmissionComponent } from 'src/app/view/admission/admission.component';
import { FeesComponent } from 'src/app/view/admission/fees/fees.component';
import { NoticeComponent } from 'src/app/view/admission/notice/notice.component';
import { OrientationComponent } from 'src/app/view/admission/orientation/orientation.component';
import { ProcedureComponent } from 'src/app/view/admission/procedure/procedure.component';
import { RegistrationComponent } from 'src/app/view/admission/registration/registration.component';
import { AdmissionRoutingModule } from './admission-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';



@NgModule({
  declarations: [
    AdmissionComponent,
    NoticeComponent,
    ProcedureComponent,
    FeesComponent,
    OrientationComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdmissionRoutingModule,
    PdfViewerModule
  ]
})
export class AdmissionModule { }
