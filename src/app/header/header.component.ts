import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit {

  login:boolean=true
  user:string=''
  cart:Boolean=false
  constructor(){

  }
   ngOnInit(): void {
     
   if(localStorage.getItem("username")){
    
    this.user=localStorage.getItem("username")||''
    this.cart=true
    this.login=false
    
   
   }
   }

   logout(){
    localStorage.removeItem('username')
    localStorage.removeItem('phone')
    
   
    window.location.href=""
    
  
   } 
}
