import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  tabcommandes = [];
  quantity;
  taille;
  total=0;
  constructor(private panSer: PanierService, 
    private router: Router) {}

  ngOnInit(): void {
    this.tabcommandes = this.panSer.listeProducts;
    this.quantity = this.panSer.qnt;
    this.taille = this.panSer.tl;
  
  }

}
