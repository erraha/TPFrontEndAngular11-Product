import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductsModel} from "../../../model/products.model";
import {ActionEvent, AppDataState, DataStateEnum, ProductEventTypes} from "../../../state/product.state";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productsInput$: Observable<AppDataState<ProductsModel[]>> | null=null;
  @Output() productEventEmmeter:EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>();
  readonly DataStateEnum=DataStateEnum;

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(p:ProductsModel){
    this.productEventEmmeter.emit({type:ProductEventTypes.Select_Product,payLoad:p});
  }
  onDelete(p:ProductsModel){
    this.productEventEmmeter.emit({type:ProductEventTypes.Delete_Product,payLoad:p});
  }
  onEdit(p:ProductsModel){
    this.productEventEmmeter.emit({type:ProductEventTypes.Edit_Product,payLoad:p});
  }
  onActionEvent($event:ActionEvent){
    this.productEventEmmeter.emit($event);
  }
}
