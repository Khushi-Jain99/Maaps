import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { BusRoutesComponent } from "src/app/view/information/bus-routes/bus-routes.component";
import { HolidaysComponent } from "src/app/view/information/holidays/holidays.component";
import { InformationComponent } from "src/app/view/information/information.component";
import { SchoolCalenderComponent } from "src/app/view/information/school-calender/school-calender.component";
import { SlcComponent } from "src/app/view/information/slc/slc.component";
import { TimingComponent } from "src/app/view/information/timing/timing.component";
import { UniformComponent } from "src/app/view/information/uniform/uniform.component";



const route:Route[]=[
    {path:'',component:InformationComponent,children:[
        {path:'calender',component:SchoolCalenderComponent},
        {path:'timing',component:TimingComponent},
        {path:'bus-routes',component:BusRoutesComponent},
        {path:'uniform',component:UniformComponent},
        {path:'holidays',component:HolidaysComponent},
        {path:'slc',component:SlcComponent}
    ]}
]
@NgModule({
    imports:[
        RouterModule.forChild(route)
    ],
    exports:[RouterModule]
})
export class InformationRoutingModule{}