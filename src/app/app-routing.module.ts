import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./composants/products/products.component";
import {HomeComponent} from "./composants/home/home.component";
import {ProductsAddComponent} from "./composants/products-add/products-add.component";
import {ProductEditComponent} from "./composants/product-edit/product-edit.component";

const routes: Routes = [
  {path:"products", component:ProductsComponent},
  {path:"newProduct", component:ProductsAddComponent},
  {path:"editProduct/:id", component:ProductEditComponent},
  {path:"", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
