import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './composants/nav-bar/nav-bar.component';
import { ProductsComponent } from './composants/products/products.component';
import { HomeComponent } from './composants/home/home.component';
import {HttpClientModule, HttpContext} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductsAddComponent } from './composants/products-add/products-add.component';
import { ProductEditComponent } from './composants/product-edit/product-edit.component';
import { ProductNavBarComponent } from './composants/products/product-nav-bar/product-nav-bar.component';
import { ProductListComponent } from './composants/products/product-list/product-list.component';
import { ProductItemComponent } from './composants/products/product-item/product-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    HomeComponent,
    ProductsAddComponent,
    ProductEditComponent,
    ProductNavBarComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
