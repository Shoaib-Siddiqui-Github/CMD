import { Component, Injectable, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SymptomService } from 'src/app/cmd/patients/services/symptom.service';

@Injectable()
@Component({
  selector: 'app-add-edit-sympton-history',
  templateUrl: './add-edit-sympton-history.component.html',
  styleUrls: ['./add-edit-sympton-history.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddEditSymptonHistoryComponent implements OnInit {

  isAdd:boolean=this.symptomservice.isAdd;
  router: any;
 

  constructor(private symptomservice:SymptomService,public dialog:MatDialog) { }
  addsymptom=new FormGroup({
     symptomId: new FormControl(),
    symptomName: new FormControl(),
    reading: new FormControl(),
    doctorname: new FormControl(),
  });
  PatientInfo(id:number) {

    //  this.router.navigate(['/CMD/appointment/ViewAppointmentDetails/'+id])
     this.router.navigate(['/CMD/patient/PatientInfo/'+id])
  
    }''
  PatientInfo1() {

     this.router.navigate(['/CMD/patients/info'])
  
    }''

  ngOnInit(): void {
    if(!this.isAdd){
      this.symptomservice.getonesymptom()
      .subscribe((result)=>{
       
        this.addsymptom=new FormGroup({
        symptomId: new FormControl(result['symptomId']),
        symptomName: new FormControl(result['symptomName']),
        reading: new FormControl(result['reading']),
        doctorname: new FormControl(result['doctorname']),
      });
      });
    }
    
  }
  onSubmit(){
    if(this.isAdd){
        this.symptomservice.addsymptomdata(this.addsymptom.value)
        .subscribe(symptom=>this.addsymptom=symptom);
    }
    else{
      this.symptomservice.editsymptomdata(this.addsymptom.value)
      .subscribe(symptom=>this.addsymptom=symptom);
    }
    this.dialog.closeAll();
  }

  closeDialoge() {
    this.dialog.closeAll();
  }

}
