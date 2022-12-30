import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faBell,faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Router } from '@angular/router';



declare var ExternalJS;
@Component({

  selector: 'app-top-header',

  templateUrl: './top-header.component.html',

  styleUrls: ['./top-header.component.scss']

})

export class TopHeaderComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  dropdwon: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  callExternalJS(){
    ExternalJS();
   }

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
