import { Component, OnInit } from '@angular/core';
import { faChartSimple,faTrash,faBarsStaggered,faUser,faMessage,faGear,faBell,faChevronDown,faCamera } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/shared/Service/login.service';
@Component({
  selector: 'app-setting-dashboard',
  templateUrl: './setting-dashboard.component.html',
  styleUrls: ['./setting-dashboard.component.scss']
})
export class SettingDashboardComponent implements OnInit {

  currentData: any;
  message: string="";
  router: any;

  constructor(private service:LoginService) { }
  ngOnInit(): void {
this.service.getDataById(id)
        .subscribe(
          data => {
            this.currentData = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
  }

  faChartSimple=faChartSimple
faTrash=faTrash
faBarsStaggered=faBarsStaggered
faUser=faUser
faMessage=faMessage
faGear=faGear
faBell=faBell
faChevronDown=faChevronDown
faCamera=faCamera
button='Edit'
active=''
active2='active2'
dropdwon='dropdwon'

  img:any='https://www.nicepng.com/png/full/136-1366211_group-of-10-guys-login-user-icon-png.png';
  onSelectFile(event:any){
    if(event.target.files){
      console.log(event.target.files);
        let r=new FileReader();
      r.readAsDataURL(event.target.files[0]);
      r.onload=(event)=>{
        this.img=event.target?.result;
      }
    
    }
    
    }
     edit(button:String){
    
    if(button==='Edit'){
    this.button='Save';
    this.active='active'
    this.active2=''

    this.service.updateData(this.currentData.id, this.currentData)
    .subscribe(
      response => {
        console.log(response);
        this.message = 'The profileinfo was updated successfully!';
      },
      error => {
        console.log(error);
      });

}
    else{
      this.button='Edit';
    this.active=''
    this.active2='active2'
    }
    
    }
    
    delete(){
      this.img='https://www.nicepng.com/png/full/136-1366211_group-of-10-guys-login-user-icon-png.png';
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


function id(id: any) {
  throw new Error('Function not implemented.');
}



