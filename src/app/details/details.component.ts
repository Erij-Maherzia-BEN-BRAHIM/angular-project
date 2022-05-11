
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() productSelected;
  show = false;
  constructor() { }

  ngOnInit(): void {
  }
  onSelect():void{
    this.show=!this.show;
  }}
