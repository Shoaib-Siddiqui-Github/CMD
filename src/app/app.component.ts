import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { formService } from './shared/service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private router: Router, private service: formService){}

  editflag(){
    this.service.editflag.next(true)
  }
  title = 'admin-panel-layout';
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
