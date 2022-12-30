import { identifierName } from '@angular/compiler';
import { Component, OnInit,ViewEncapsulation} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Prescriptions } from 'src/app/cmd/appointments/Model/Prescriptions';
import { AddPrescriptionService } from 'src/app/cmd/appointments/Service/add-prescription.service';
import { AddEditPrescriptionComponent } from './component/add-edit-prescription/add-edit-prescription.component';
// Component of app View all priscription
@Component({
  selector: 'app-view-all-prescription',
  templateUrl: './view-all-prescription.component.html',
  styleUrls: ['./view-all-prescription.component.scss'],
  //encapsulation: ViewEncapsulation.None
})
// get all data from view all appointment ( ViewAllPrescriptionComponent )
export class ViewAllPrescriptionComponent implements OnInit {
  
  constructor(private _AddPrescriptionService:AddPrescriptionService,public dialog:MatDialog,private _Activatedroute:ActivatedRoute) {}

  // Medicinal prescription from view detail
 
  medicines!: Prescriptions[];
  aid!: any; 
  trackbyMedicine(index: number,medicines:Prescriptions)
   {
     return medicines.prescriptionId;
   }
 

  ngOnInit(): void {
    this.aid=this._Activatedroute.snapshot.paramMap.get('id');
   
    this._AddPrescriptionService.appointmentId=this.aid;

    this._AddPrescriptionService.getAppointment(this.aid)
    .subscribe(medicine=>this.medicines=medicine)       
    
  }

  // for adding prescription details 
  addPre(){
  
        this._AddPrescriptionService.isAdd=true;
       
        this.dialog.open(AddEditPrescriptionComponent, { disableClose: false,})
        
        this.dialog.afterAllClosed.subscribe(()=>this.ngOnInit());      
       
             
     }
     // for edit prescription details  obj
  editPre(medicineId:number){ 
  
    this._AddPrescriptionService.isAdd=false;    
    this._AddPrescriptionService.editIndex=medicineId;
   
    this.dialog.open(AddEditPrescriptionComponent, { disableClose: false }); 
    this.dialog.afterAllClosed.subscribe(()=>this.ngOnInit());  
   
  }
  // delete precription from prescription
  deletePrescription(medicineId:number){
      
      this._AddPrescriptionService.deleteprescriptionDetails(medicineId).subscribe((result)=>
      {
        this.ngOnInit();
      });
  } 
}