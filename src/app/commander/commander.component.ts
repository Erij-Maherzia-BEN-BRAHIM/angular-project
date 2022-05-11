import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.css']
})
export class CommanderComponent implements OnInit {
  @Input() detailProd
  constructor() { }

  ngOnInit(): void {
  }

 quantity:number=1;
 i=1
 plus(){
  if(this.i !=9){
    this.i++;
  }
  this.quantity=this.i;
 }
 minus(){
  if(this.i !=1){
    this.i--;
  }
  this.quantity=this.i;
 }
}
