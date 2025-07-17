import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AdmissionComponent } from "src/app/view/admission/admission.component";
import { FeesComponent } from "src/app/view/admission/fees/fees.component";
import { NoticeComponent } from "src/app/view/admission/notice/notice.component";
import { OrientationComponent } from "src/app/view/admission/orientation/orientation.component";
import { ProcedureComponent } from "src/app/view/admission/procedure/procedure.component";
import { RegistrationComponent } from "src/app/view/admission/registration/registration.component";

const route:Route[]=[
    {path:'',component:AdmissionComponent,children:[
        {path:'admission-notice',component:NoticeComponent},
        {path:'procedure',component:ProcedureComponent},
        {path:'fees-structure',component:FeesComponent},
        {path:'orientation',component:OrientationComponent},
        {path:'registration-form',component:RegistrationComponent}
    ]}
]
@NgModule({
    imports:[
        RouterModule.forChild(route)
    ],
    exports:[
        RouterModule
    ]
})
export class AdmissionRoutingModule{}