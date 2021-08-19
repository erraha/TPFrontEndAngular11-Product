import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductsModel} from "../model/products.model";
import {environment} from "../../environments/environment";

@Injectable({providedIn:"root"})
export  class ProductsService{
  constructor( private http:HttpClient){
  }

  getAllProducts():Observable<ProductsModel[]>{
    let host=environment.host;
   // return this.http.get("http://localhost:3000/products");
    return this.http.get<ProductsModel[]>(host+"/products");
  }

  getSelectedProducts():Observable<ProductsModel[]>{
    let host=environment.host;
    // return this.http.get("http://localhost:3000/products");
    return this.http.get<ProductsModel[]>(host+"/products?selected=true");
  }

  getAvailableProducts():Observable<ProductsModel[]>{
    let host=environment.host;
    // return this.http.get("http://localhost:3000/products");
    return this.http.get<ProductsModel[]>(host+"/products?available=true");
  }

  searchProducts(keyword:string):Observable<ProductsModel[]>{
    let host=environment.host;
    // return this.http.get("http://localhost:3000/products");
    return this.http.get<ProductsModel[]>(host+"/products?name_like="+keyword);
  }

  selectProducts(p:ProductsModel):Observable<ProductsModel>{
    let host=environment.host;
    // return this.http.get("http://localhost:3000/products");
    p.selected=!p.selected;
    return this.http.put<ProductsModel>(host+"/products/"+p.id,p);
  }
  deleteProducts(p:ProductsModel):Observable<void>{
    let host=environment.host;
    // return this.http.get("http://localhost:3000/products");
    p.selected=!p.selected;
    return this.http.delete<void>(host+"/products/"+p.id);
  }
  saveProducts(p:ProductsModel):Observable<ProductsModel>{
    let host=environment.host;
    // return this.http.get("http://localhost:3000/products");
    return this.http.post<ProductsModel>(host+"/products",p);
  }

  getProduct(id:number):Observable<ProductsModel>{
    let host=environment.host;
    // return this.http.get("http://localhost:3000/products");
    return this.http.get<ProductsModel>(host+"/products/"+id);
  }
  updateProduct(product:ProductsModel):Observable<ProductsModel>{
    let host=environment.host;
    // return this.http.get("http://localhost:3000/products");
    return this.http.put<ProductsModel>(host+"/products/"+product.id,product);
  }
}
