import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { InternshipsComponent } from './internships/internships.component';
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
import { HospitalsComponent } from './hospitals/hospitals.component';




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
    path:'companies',
    component: CompaniesComponent
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
    path:'admin',
    component: AdminComponent
  },
  {
    path:'manage-user',
    component: ManageUserComponent
  },
  {
    path:'users',
    component: UsersComponent
  },
  {
    path:'hospitals',
    component: HospitalsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
