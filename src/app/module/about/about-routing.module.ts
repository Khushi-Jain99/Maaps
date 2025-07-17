import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AboutMaapsComponent } from "src/app/view/about-us/about-maaps/about-maaps.component";
import { AboutUsComponent } from "src/app/view/about-us/about-us.component";
import { AffilationComponent } from "src/app/view/about-us/affilation/affilation.component";
import { ChairmanComponent } from "src/app/view/about-us/chairman/chairman.component";
import { FacultyComponent } from "src/app/view/about-us/faculty/faculty.component";
import { ManagerComponent } from "src/app/view/about-us/manager/manager.component";
import { PrimaryComponent } from "src/app/view/about-us/primary/primary.component";
import { PrincipalComponent } from "src/app/view/about-us/principal/principal.component";
import { SeniorComponent } from "src/app/view/about-us/senior/senior.component";
import { VissionComponent } from "src/app/view/about-us/vission/vission.component";
const route:Route[]=[
    {path:'',component:AboutUsComponent,children:[
        {path:'vision',component:VissionComponent},
        {path:'affilation',component:AffilationComponent},
        {path:'chairman-message',component:ChairmanComponent},
        {path:'faculty',component:FacultyComponent},
        {path:'manager-message',component:ManagerComponent},
        {path:'primary-message',component:PrimaryComponent},
        {path:'principal',component:PrincipalComponent},
        {path:'senior',component:SeniorComponent},
        {path:'about-maaps',component:AboutMaapsComponent},
        {path:'intro',component:AboutMaapsComponent}
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
export class AboutRoutingModule{}