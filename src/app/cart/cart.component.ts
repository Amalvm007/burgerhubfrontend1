import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  allCart:any=[]
  Grandtotal:number=0
  constructor(private api:ApiService ){

  }
  ngOnInit(): void {

    this.api.getAllCart()
    .subscribe((result:any)=>{
      this.allCart=result.cart
      console.log( this.allCart);
        this.Grandtotal= this.grandTotal()
        console.log(this.Grandtotal);
        
       
      
    })
    
  }

  // grandTotal
  grandTotal(){
    let total = 0
    this.allCart.map((item:any)=>{
      total+=item.price
    })
    return total;
  }

  // remove from cart 
  removeCartItem(product:any){
    this.allCart.map((item:any, index:any)=>{
      if(product.id== item.id){
        this.allCart.splice(index,1)
      }
    })
    
  }
}
