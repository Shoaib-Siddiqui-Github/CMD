import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  username: string;

  constructor( private auth : AuthService ) { }

  ngOnInit(): void {
  }
  forgetpassword(){
    this.auth.forgotpassword(this.username);
    this.username='';
  }
}
