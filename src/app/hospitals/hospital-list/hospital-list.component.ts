import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/shared/hospital.service';
import { Hospital } from 'src/app/shared/hospital.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {

list: Hospital[];
  constructor(private service: HospitalService,
    private firestore: AngularFirestore,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.getHospitals().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Hospital;
      })
    });
  }

  onEdit(emp: Hospital) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('users/' + id).delete();
      this.toastr.warning('Deleted successfully','EMP. Register');
    }
  }
  }
