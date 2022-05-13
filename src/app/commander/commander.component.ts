import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.css'],
})
export class CommanderComponent implements OnInit {
  quantity = 1;
  i = 1;
  taill;
  @Input() detailProd;
  product: any;
  constructor(private panSer: PanierService, private router: Router) {}

  ngOnInit(): void {}

  plus() {
    if (this.i != 9) {
      this.i++;
    }
    this.quantity = this.i;
  }
  minus() {
    if (this.i != 1) {
      this.i--;
    }
    this.quantity = this.i;
  }
  ajouterAuPanier() {
    this.detailProd.prixTotal = this.quantity * this.detailProd.prix;
    console.log(this.taill);

    this.panSer.addToPanier(this.detailProd, this.quantity, this.taill);
    this.router.navigate(['/panier']);
  }
}
