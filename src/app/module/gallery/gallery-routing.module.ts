import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { GalleryItemComponent } from "src/app/view/gallery/gallery-item/gallery-item.component";
import { GalleryComponent } from "src/app/view/gallery/gallery.component";

const route:Route[]=[
    {path:'',component:GalleryComponent,children:[
        {path:':id',component:GalleryItemComponent}
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
export class GalleryRoutingModule{}