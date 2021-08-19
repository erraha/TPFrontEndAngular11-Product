import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ProductsModel} from "../../model/products.model";
import {Observable, of} from "rxjs";
import {catchError, map, startWith} from "rxjs/operators";
import {AppDataState, DataStateEnum} from "../../state/product.state";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  //private products?: ProductsModel[]; ? valeur optionnel ou bien
  // 1 : public products?: ProductsModel[]|null=null // mm le nul n'est pas obligatoir;
  // 2
     // products$: Observable<ProductsModel[]> | null=null;
  //3
  products$: Observable<AppDataState<ProductsModel[]>> | null=null;
  readonly DataStateEnum=DataStateEnum;

  constructor(private productsService:ProductsService,private router:Router ) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    /*1 : this.productsService.getAllProducts().subscribe(
      data=>{this.products=data}
     );*/
   // 2
    /*this.products$=this.productsService.getAllProducts();*/
    //3
    this.products$=this.productsService.getAllProducts().pipe(
      map(data=>({dataState:DataStateEnum.LOADED,data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    );
  }

  onGetSelectedProducts() {
   // 2
    // this.products$=this.productsService.getSelectedProducts();
    //3
    this.products$=this.productsService.getSelectedProducts().pipe(
      map(data=>({dataState:DataStateEnum.LOADED,data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    );
  }

  onGetAvailableProducts() {
   // 2
    // this.products$=this.productsService.getAvailableProducts();
    //3
    this.products$=this.productsService.getAvailableProducts().pipe(
      map(data=>({dataState:DataStateEnum.LOADED,data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    );
  }

  onSearch(dataForm: any) {
    this.products$=this.productsService.searchProducts(dataForm.keyWord).pipe(
      map(data=>({dataState:DataStateEnum.LOADED,data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    );
  }

  onSelect(p: ProductsModel) {
          this.productsService.selectProducts(p).subscribe(data=>{p.selected=data.selected});
  }



  onDelete(p: ProductsModel) {
    let v=confirm("est vous sur de supprimer?");
    if(v==true)
      this.productsService.deleteProducts(p).subscribe(data=>{this.onGetAllProducts()});
  }

  onNewProduct() {
     this.router.navigateByUrl("/newProduct");
  }

  onEdit(p:ProductsModel)
  {
    this.router.navigateByUrl("/editProduct/"+p.id);
  }
}
