import { FormsModule } from '@angular/forms';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommanderComponent } from './commander/commander.component';
import { PanierComponent } from './panier/panier.component';
import { RouterModule } from '@angular/router';
import { MyPrint_Routing } from './app.routing';
import { HttpClientModule} from '@angular/common/http';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ContactComponent } from './contact/contact.component';
import { AddComponent } from './add/add.component';
import { UpdateProdComponent } from './update-prod/update-prod.component';

const firebaseConfig = {
  apiKey: "AIzaSyC875bzNW-tb4tIUSzUDdsry2lJcRRzwVE",
  authDomain: "myprint-2556c.firebaseapp.com",
  projectId: "myprint-2556c",
  storageBucket: "myprint-2556c.appspot.com",
  messagingSenderId: "811927617678",
  appId: "1:811927617678:web:aa0ce3dec0dfc8ad06c9df",
  measurementId: "G-1Q643XH9Y4"
};
@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    HomeComponent,
    DetailsComponent,
    NavbarComponent,
    CommanderComponent,
    PanierComponent,
    FormulaireComponent,
    ContactComponent,
    AddComponent,
    UpdateProdComponent
  ],
  imports: [
    BrowserModule, RouterModule, MyPrint_Routing, FormsModule, HttpClientModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
