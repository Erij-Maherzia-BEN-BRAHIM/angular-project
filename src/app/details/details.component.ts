
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CommandeService } from '../commande.service';
import { Product } from '../Product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() productSelected;
  show = false;
  constructor(
    private router: Router,
    private prodSer: CommandeService,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap)=>{
        this.productSelected=this.prodSer.getProductById(p.get('id'));
      },
    });
  }
  deleteProduct(p){
    if(confirm('Vous voulez vraiment supprimer ce produit?')){
this.prodSer.deletProductById(p);
this.router.navigateByUrl('/home');
    }
  }
  onSelect():void{
    this.show=!this.show;
  }

}
