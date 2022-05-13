import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HomeComponent } from './home/home.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { PanierComponent } from './panier/panier.component';
import { UpdateProdComponent } from './update-prod/update-prod.component';

let myRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detail', component: DetailsComponent },
  { path: 'list', component: ListProductsComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit', component: UpdateProdComponent },
];

export const MyPrint_Routing = RouterModule.forRoot(myRoutes);
