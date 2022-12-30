import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-schudle',
  templateUrl: './appointment-schudle.component.html',
  styleUrls: ['./appointment-schudle.component.scss']
})
export class AppointmentSchudleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dropdwon='dropdwon'
  drop(dropdwon:string){
    
    if(dropdwon===''){
     console.log(dropdwon)
      this.dropdwon='dropdwon'
  
    }
    else{
      console.log(dropdwon)
      this.dropdwon=''
    }
  }
}
