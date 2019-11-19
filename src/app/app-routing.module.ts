import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { InternshipsComponent } from './internships/internships.component';
import { HospitalComponent } from './Hospital/Hospital.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';



const routes: Routes = [
  { path:'',component: IndexComponent },
  {
    path:'home',
    component: IndexComponent
  },
  {
    path:'internships',
    component: InternshipsComponent
  },
  {
    path:'Hospital',
    component: HospitalComponent
  },
  {
    path:'doctors',
    component: DoctorsComponent
  },
  {
    path:'blog',
    component: BlogComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'appointments',
    component: AppointmentsComponent
  },
  {
    path: 'bookappointment',
    component: BookappointmentComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
