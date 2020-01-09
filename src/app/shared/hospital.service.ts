import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Hospital } from './hospital.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  formData: Hospital;

  constructor(private firestore: AngularFirestore) { }

  getHospitals() {
    return this.firestore.collection('hospitals').snapshotChanges();
  }
}