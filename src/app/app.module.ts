import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsComponent } from './view/home/news/news.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './view/header/header.component';
import { SliderComponent } from './view/header/slider/slider.component';
import { AboutComponent } from './view/home/about/about.component';
import { MessageHeaderComponent } from './view/home/about/message-header/message-header.component';
import { HomeComponent } from './view/home/home.component';
import { ShowcaseComponent } from './view/home/showcase/showcase.component';
import { LoaderComponent } from './view/shared/loader/loader.component';
import { AboutModule } from './module/about/about.module';
import { CampusModule } from './module/campus/campus.module';
import { AdmissionModule } from './module/admission/admission.module';
import { AcademicModule } from './module/academic/academic.module';
import { BeyondAcademicModule } from './module/beyond-academic/beyond-academic.module';
import { InformationModule } from './module/information/information.module';
import { NotFoundComponent } from './view/not-found/not-found.component';
import { TestimonialComponent } from './view/home/testimonial/testimonial.component';
import { FooterComponent } from './view/footer/footer.component';
import { ContactUsComponent } from './view/footer/contact-us/contact-us.component';
import { MapsComponent } from './view/footer/maps/maps.component';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NewsletterComponent } from './view/newsletter/newsletter.component';
import { CbseComponent } from './view/cbse/cbse.component';
import { HttpClientModule } from '@angular/common/http';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { GalleryModule } from './module/gallery/gallery.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from 'src/environments/environment';
import { AllVideosComponent } from './view/all-videos/all-videos.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ShowcaseComponent,
    SliderComponent,
    AboutComponent,
    MessageHeaderComponent,
    LoaderComponent,
    NewsComponent,
    NotFoundComponent,
    TestimonialComponent,
    FooterComponent,
    ContactUsComponent,
    MapsComponent,
    NewsletterComponent,
    CbseComponent,
    AllVideosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AboutModule,
    CampusModule,
    AdmissionModule,
    AcademicModule,
    BeyondAcademicModule,
    InformationModule,
    FormsModule,
    MatIconModule,
    PdfViewerModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    GalleryModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
