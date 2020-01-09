import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { bootstrap } from 'bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
 
 
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
import { CompaniesComponent } from './companies/companies.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AdminComponent } from './admin/admin.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserService } from './shared/user.service';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { HospitalComponent } from './hospitals/hospital/hospital.component';
import { HospitalListComponent } from './hospitals/hospital-list/hospital-list.component';
import { HospitalService } from './shared/hospital.service';



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
    CompaniesComponent,
    BlogComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    DoctorsComponent,
    AdminComponent,
    ManageUserComponent,
    UsersComponent,
    UserComponent,
    UserListComponent,
    HospitalsComponent,
    HospitalComponent,
    HospitalListComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
	
  ],
    providers: [UserService,HospitalService],
    bootstrap: [AppComponent]
})
export class AppModule { }
