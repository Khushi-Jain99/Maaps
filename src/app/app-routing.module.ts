import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AllVideosComponent } from "./view/all-videos/all-videos.component";
import { CbseComponent } from "./view/cbse/cbse.component";
import { HomeComponent } from "./view/home/home.component";
import { NewsletterComponent } from "./view/newsletter/newsletter.component";
import { NotFoundComponent } from "./view/not-found/not-found.component";

const routes:Route[]=[
    {path:'',component:HomeComponent},
    {path:'about',loadChildren:'./module/about/about.module#AboutModule'},
    {path:'academic',loadChildren:'./module/academic/academic.module#AcademicModule'},
    {path:'admission',loadChildren:'./module/admission/admission.module#AdmissionModule'},
    {path:'beyond',loadChildren:'./module/beyond-academic/beyond-academic.module#BeyondAcademicModule'},
    {path:'campus',loadChildren:'./module/campus/campus.module#CampusModule'},
    {path:'information',loadChildren:'./module/information/information.module#InformationModule'},
    {path:'gallery',loadChildren:'./module/gallery/gallery.module#GalleryModule'},
    {path:'newsletter',component:NewsletterComponent},
    {path:'cbse',component:CbseComponent},
    {path:'all-video',component:AllVideosComponent},
    {path:'not-found',component:NotFoundComponent},
    {path:'**',redirectTo:'not-found',pathMatch:'full'}
]
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}