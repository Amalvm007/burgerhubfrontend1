import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb:FormBuilder , private api:ApiService, private route:Router){
    
  }
  


  
  // registerForm
  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
    phone:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })


   // register function
   register(){
    if(this.registerForm.valid){
      let uname = this.registerForm.value.uname
      let phone = this.registerForm.value.phone
      let pswd = this.registerForm.value.pswd
      this.api.register(uname,phone,pswd)
      .subscribe(
        // success case 
        (result:any)=>{
        alert(result.message)
         console.log(result.message);
        //  navigate to home page
        this.route.navigateByUrl('')
        setTimeout(() => {
          this.registerForm.reset()
        }, 5000);
        
        
      },
      (result:any)=>{
        alert(result.error.message)
      }
      )
    }else{
      alert('Invaild register form')
    }

  }
  
 

}
