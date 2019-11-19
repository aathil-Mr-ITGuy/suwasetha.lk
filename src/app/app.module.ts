import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { LoginService } from './shared/login.service';
import { FormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { AppRoutingModule } from './app-routing.module';
import { JobCatogariesComponent } from './job-catogaries/job-catogaries.component';
import { FeatureComponent } from './feature/feature.component';
import { HowWorksComponent } from './how-works/how-works.component';
import { TestimonalsComponent } from './testimonals/testimonals.component';
import { CounterComponent } from './counter/counter.component';
import { InternshipsComponent } from './internships/internships.component';
import { InternshipsSearchComponent } from './internships-search/internships-search.component';
import { Nav2Component } from './nav2/nav2.component';
import { HospitalComponent } from './Hospital/Hospital.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import * as $ from 'jquery';

var config= {
  apiKey: "AIzaSyAvMv5r7BPjy60gg_Ss7_mpZodp9oJaJEE",
  authDomain: "suwasethalk-68fc8.firebaseapp.com",
  databaseURL: "https://suwasethalk-68fc8.firebaseio.com",
  projectId: "suwasethalk-68fc8",
  storageBucket: "suwasethalk-68fc8.appspot.com",
  messagingSenderId: "761040260897",
  
}

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    JobCatogariesComponent,
    FeatureComponent,
    HowWorksComponent,
    TestimonalsComponent,
    CounterComponent,
    InternshipsComponent,
    InternshipsSearchComponent,
    Nav2Component,
    HospitalComponent,
    BlogComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    DoctorsComponent,
    AppointmentsComponent,
    BookappointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp (config),
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFireAuthModule
    //AngularFirestore
  ],
  providers: [AngularFirestore,
    LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
