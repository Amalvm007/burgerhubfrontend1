import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {


  products:any= []
  model:any=[]
  username:string=''
  user:boolean=false
  phone:string=''

constructor( private api:ApiService,private activatedRoute:ActivatedRoute ){

}

ngOnInit(): void {
  this.api.allProducts()
  .subscribe((data:any)=>{
   
     this.products= data.products
     console.log(this.products);
  })

    if(localStorage.getItem("username")){
       this.username = localStorage.getItem('username')||''
       this.user=true
      
      
    }

    this.phone=localStorage.getItem('phone')||''
    console.log(this.phone);

}
addToCart(phone:any,product:any){

  if(this.phone){
    this.api.addToCart(phone,product)
  .subscribe(
    (result:any)=>{
      alert(result.message)
    console.log(result);
    
    
  })
  }else{
    alert("plese Login")
  }
  
}

}
