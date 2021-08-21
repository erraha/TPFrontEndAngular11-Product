import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductEventTypes} from "../../../state/product.state";

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {

  @Output() productEventEmmeter:EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>();
  constructor() { }

  ngOnInit(): void {
  }

  onGetAllProducts(){
    //1- this.productEventEmmeter.emit("ALL-Products");
    // 2 avec enumération
    // this.productEventEmmeter.emit(ProductEventTypes.Get_ALL_Product);
    // 3 avec enumération et payload
    this.productEventEmmeter.emit({type:ProductEventTypes.Get_ALL_Product});
  }
  onGetSelectedProducts(){
    this.productEventEmmeter.emit({type:ProductEventTypes.Get_Selected_Product});
  }

  onGetAvailableProducts(){
    this.productEventEmmeter.emit({type:ProductEventTypes.Get_Avialable_Product});
  }
  onNewProduct(){
    this.productEventEmmeter.emit({type:ProductEventTypes.New_Product});
  }
  onSearch(valeur:any){
    this.productEventEmmeter.emit({type:ProductEventTypes.Search_Product,payLoad:valeur});
  }
}
