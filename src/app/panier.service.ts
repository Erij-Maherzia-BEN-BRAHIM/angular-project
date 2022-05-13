import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  listeProducts = [];
  qnt;
  tl;

  constructor() {}

  addToPanier(product, q, t) {
    this.listeProducts.push(product);
    this.qnt = q;
    this.tl = t;
  }
  
}
