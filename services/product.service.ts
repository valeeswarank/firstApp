import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { 
    console.log("service called!");
  }

  productData(){
    return[
      {
        name: "samsung",
        model: "galaxy 25x",
        year: 2015
      },
      {
        name: "apple",
        model: "pro 2014",
        year: 2014
      }    
    ]
  }

  productList(){
    const url="https://dummyjson.com/products"
    return this.http.get(url)
  }

}
