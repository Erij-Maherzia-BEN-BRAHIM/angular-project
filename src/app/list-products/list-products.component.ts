import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import{ PRODUCTS} from '../mock-products'
import { Product } from '../Product';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
products= PRODUCTS;
productSelected?:Product;
@Output() msgToHome =new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }
onSelect(product: Product):void{
  this.productSelected=product;
  this.msgToHome.emit(this.productSelected)
}
}
