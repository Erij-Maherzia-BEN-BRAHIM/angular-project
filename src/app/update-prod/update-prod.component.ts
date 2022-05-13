import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'app-update-prod',
  templateUrl: './update-prod.component.html',
  styleUrls: ['./update-prod.component.css']
})
export class UpdateProdComponent implements OnInit {
  editProduct;
  constructor(private router: Router ,
    private prodSer: CommandeService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
this.activeRoute.paramMap.subscribe({
  next:(p)=>{
    this.editProduct=this.prodSer.getProductById(p.get('id'));
  }
})
  }
  updateProduct(){
    this.prodSer.updatProduct(this.editProduct);
    this.router.navigateByUrl('/home')
  }
}
