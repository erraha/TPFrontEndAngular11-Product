import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductsModel} from "../../../model/products.model";
import {ActionEvent, ProductEventTypes} from "../../../state/product.state";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product?:ProductsModel;
  @Output() productEventEmmeter:EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>();
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(product:ProductsModel){
    this.productEventEmmeter.emit({type:ProductEventTypes.Delete_Product,payLoad:product})
  }
  onSelect(product:ProductsModel){
    this.productEventEmmeter.emit({type:ProductEventTypes.Select_Product,payLoad:product})
  }
  onEdit(product:ProductsModel){
    this.productEventEmmeter.emit({type:ProductEventTypes.Edit_Product,payLoad:product})
  }
}
