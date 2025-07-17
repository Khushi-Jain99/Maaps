import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CampusComponent } from "src/app/view/campus/campus.component";
import { ActivityRoomComponent } from "src/app/view/campus/facility/activity-room/activity-room.component";
import { ComputerComponent } from "src/app/view/campus/facility/computer/computer.component";
import { FacilityComponent } from "src/app/view/campus/facility/facility.component";
import { LibraryComponent } from "src/app/view/campus/facility/library/library.component";
import { MathComponent } from "src/app/view/campus/facility/math/math.component";
import { SocialScienceComponent } from "src/app/view/campus/facility/social-science/social-science.component";
import { SafetyComponent } from "src/app/view/campus/safety/safety.component";
const route:Route[]=[
    {path:'',component:CampusComponent,children:[
        {path:'safety',component:SafetyComponent},
        {path:'facility',component:FacilityComponent,children:[
            {path:'social-science-lab',component:SocialScienceComponent},
            {path:'math-lab',component:MathComponent},
            {path:'computer-lab',component:ComputerComponent},
            {path:'library',component:LibraryComponent},
            {path:'activity-room',component:ActivityRoomComponent}
        ]}
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
export class CampusRoutingModule{}