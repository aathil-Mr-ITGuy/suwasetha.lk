import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    DoctorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
