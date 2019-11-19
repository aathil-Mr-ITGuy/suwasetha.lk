import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: LoginService,
    private firestore: AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      email: '',
      password: '',
    }
  }

  onSubmit (form: NgForm) {
    let data=Object.assign ({}, form.value);
    delete data.email;
    if (form.value.email == null)
      this.firestore.collection('Patient').add(data);
    else
      this.firestore.doc('Patient/' + form.value.email).update(data);
    this.resetForm(form);
  }

}
