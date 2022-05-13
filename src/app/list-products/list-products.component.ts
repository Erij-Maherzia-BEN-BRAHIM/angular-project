import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeService } from '../commande.service';
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
product;
@Output() msgToHome =new EventEmitter(); 
  constructor(private router: Router,
    private prodSer: CommandeService) { }

  ngOnInit(): void {
  }
onSelect(product: Product):void{
  this.productSelected=product;
  this.msgToHome.emit(this.productSelected)
}
addNewProduct(){
this.router.navigateByUrl('/add')
}
}
