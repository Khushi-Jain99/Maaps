import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AlumniMeetComponent } from "src/app/view/beyond-acedemic/alumni-meet/alumni-meet.component";
import { BeyondAcedemicComponent } from "src/app/view/beyond-acedemic/beyond-acedemic.component";
import { ClubsComponent } from "src/app/view/beyond-acedemic/clubs/clubs.component";
import { HouseComponent } from "src/app/view/beyond-acedemic/house/house.component";
import { InterSchoolComponent } from "src/app/view/beyond-acedemic/inter-school/inter-school.component";
import { SportsComponent } from "src/app/view/beyond-acedemic/sports/sports.component";
import { StudentCouncilComponent } from "src/app/view/beyond-acedemic/student-council/student-council.component";
import { ToursComponent } from "src/app/view/beyond-acedemic/tours/tours.component";

const route:Route[]=[
    {path:'',component:BeyondAcedemicComponent,children:[
        {path:'house',component:HouseComponent},
        {path:'clubs',component:ClubsComponent},
        {path:'sports',component:SportsComponent},
        {path:'tours',component:ToursComponent},
        {path:'student-council',component:StudentCouncilComponent},
        {path:'inter-school',component:InterSchoolComponent},
        {path:'alumni',component:AlumniMeetComponent}
    ]}
]
@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[
        RouterModule
    ]
})
export class BeyondAcademicRoutingModule{}