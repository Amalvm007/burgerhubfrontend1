import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options={
  headers:new HttpHeaders()

}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor( private http:HttpClient) { }

  // allproducts
  allProducts(){
    return this.http.get('http://localhost:3000/products')
  }


   // login api calls
   login(phone:any,pswd:any){
    const body={
      phone,
      pswd
    }
    return this.http.post('http://localhost:3000/login',body)

  }

  // register api call create an account
  register(uname:any,phone:any,pswd:any){
    const body={
      uname,
      phone,
      pswd
    }
     return this.http.post('http://localhost:3000/register',body)

  }
  // token append in http headers
  appendToken(){
   
      // fetch token
      const token = localStorage.getItem("token")||''
      // create headers
      var headers = new HttpHeaders()
      if(token){
        headers= headers.append('token12',token)
        // overloading token
        options.headers=headers
        
      }
      console.log(options);
      
      return options

    
  }

  // register api call create an account
  addToCart(phone:any,product:any){
    const body={
      phone,
      product
    }
     return this.http.post('http://localhost:3000/addtocart',body,this.appendToken())

  }

  // get all cart items
  getAllCart(){
    return this.http.get('http://localhost:3000/getcart',this.appendToken())
  }
}
