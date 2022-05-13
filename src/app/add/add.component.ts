import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private prodSer: CommandeService, private router:Router
  ) { }

  ngOnInit(): void {
  }
  add(newP){
 this.prodSer.addProduct(newP);
 this.router.navigateByUrl('/home')
   
   
  }
}
