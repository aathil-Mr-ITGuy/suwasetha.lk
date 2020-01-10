import { Injectable, NgModule } from '@angular/core';
import { Login } from './login.model';
import { FormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

@NgModule ({
  imports: [
    FormsModule

  ],
})
export class LoginService {
  formData: Login;

  constructor(private firestore: AngularFirestore) { }

  getLogin() {
    return this.firestore.collection('Patient').snapshotChanges();
  }
}
