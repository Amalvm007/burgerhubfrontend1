import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMsg:string=''
  successMsg:boolean=false
  maindiv:boolean=true

  constructor(private fb:FormBuilder , private api:ApiService ,private route:Router){
    
  }


  // loginForm
  loginForm =this.fb.group({
    phone:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })


  // login function
  login(){
    if(this.loginForm.valid){
    
     let phone =this.loginForm.value.phone
     let pswd = this.loginForm.value.pswd
    //  login api call
    this.api.login(phone,pswd)
    .subscribe(
      (result:any)=>{
        if(result.username=='admin'){
          this.route.navigateByUrl('admin')
          console.log(result.message);
      
      this.successMsg=true
      this.maindiv=false
      // to store data in local storage 
      // to store username
      localStorage.setItem('username',result.username)
      // to store phone number
      localStorage.setItem('phone',JSON.stringify(result.phone))
      // to store token
      localStorage.setItem('token',result.token)
      

        }else{
          console.log(result.message);
      
      this.successMsg=true
      this.maindiv=false
      // to store data in local storage 
      // to store username
      localStorage.setItem('username',result.username)
      // to store phone number
      localStorage.setItem('phone',JSON.stringify(result.phone))
      // to store token
      localStorage.setItem('token',result.token)

      setTimeout(() => {
        this.loginForm.reset()
        window.location.href=""
        // this.route.navigateByUrl('')
      }, 1000);

        }
    },
    (result:any)=>{
    this.errorMsg=result.error.message
    })
    }else{
     alert('invaild Form')
    }
     
   }

}
