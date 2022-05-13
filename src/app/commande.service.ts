import { Injectable } from '@angular/core';
import { PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

listProduct=PRODUCTS
  constructor() { }
  
  addProduct(newP){
    this.listProduct.push(newP);
  }


  getProductById(id){
    return this.listProduct.find((p)=>p._id==id)
  }


  deletProductById(id){
    this.listProduct.splice(this.listProduct.indexOf(this.listProduct.find((p)=>p._id==id),1))
  }

  
  updatProduct(prod){
    let i=this.listProduct.indexOf(prod);
    this.listProduct[i]=prod;
  }
/*   updateProductAPI(cand) {
    return this.http.put(`${this.link}/${prod._id}`, prod);
  } */
}
