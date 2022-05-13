import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://myprint-2556c-default-rtdb.firebaseio.com/products.json').subscribe({next : (res) => {
      console.log(res);
      
    }});
  }

}
