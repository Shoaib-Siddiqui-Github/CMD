import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth"
import { Router } from '@angular/router';
import { GoogleAuthProvider ,FacebookAuthProvider, user} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private fireauth : AngularFireAuth, private  router : Router) { } 

login(username : string,password : string){
  this.fireauth.signInWithEmailAndPassword(username,password).then(  () => {
      localStorage.setItem('token','true');
      this.router.navigate(['viewallappointments']);
   

  }, err =>{
      alert(err.message);
      this.router.navigate(['landing']);
  })

}
// register method
register (username : string, password : string)
{
  this.fireauth.createUserWithEmailAndPassword(username, password).then( () => {
   alert('Registration Successful');
    this.router.navigate(['/landing']);
    this.sendEmailForVerification(user)
  }, err=> {
    alert(err.message);
    this.router.navigate(['/register']);

  })
}
 


logout(){
  this.fireauth.signOut().then( () =>{
    localStorage.removeItem('token');
    this.router.navigate(['/landing']);
  }, err => {
    alert(err.message)
  })
}

googleSignIn()
{
return this.fireauth.signInWithPopup(new GoogleAuthProvider).then( res=>{
this.router.navigate(['/landing']);
localStorage.setItem('token',JSON.stringify(res.user?.uid))
},err=>{
  alert(err.message);

})
}

//forgot password
forgotpassword(email : string){
this.fireauth.sendPasswordResetEmail(email).then ( res =>{
this.router.navigate(['/varify-email']);
},err => {
 alert('something went wrong') ;
})
}

//email verification
sendEmailForVerification(user : any)
{
user.sendEmailForVerification().then((res : any) =>{
  this.router.navigate(['/varify-email']);
},(err : any) =>{
  alert('something went wrong. Not able to send mail');
}
  
  )}
}

