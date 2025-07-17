import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from 'src/app/view/gallery/gallery.component';
import { RouterModule } from '@angular/router';
import { GalleryRoutingModule } from './gallery-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { GalleryItemComponent } from 'src/app/view/gallery/gallery-item/gallery-item.component';



@NgModule({
  declarations: [
    GalleryComponent,
    GalleryItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GalleryRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ]
})
export class GalleryModule { }
