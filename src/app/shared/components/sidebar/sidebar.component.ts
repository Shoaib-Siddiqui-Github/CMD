import { Component, OnInit } from '@angular/core';



declare var ExternalJS;
declare var ExternalJS1;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
 callExternalJS(){
  ExternalJS();
 }
 callExternalJS1(){
  ExternalJS1();
 }
  activePageName:any;

  constructor() { }

  ngOnInit(): void {
    this.activePageName = localStorage.getItem("activePageName")
  }

  setActivePage(pageName: string){
    localStorage.setItem("activePageName",pageName)
  }

}
