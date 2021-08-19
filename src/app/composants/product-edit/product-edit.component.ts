import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productId:number;
  productFormGroup = new FormGroup({
    id:new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    qty: new FormControl(),
    selected: new FormControl(),
    available: new FormControl()
  });
  submitted:boolean=false;
  constructor(private activatedRoute:ActivatedRoute,
              private productService:ProductsService,
              private fb:FormBuilder) {
    this.productId=activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.productService.getProduct(this.productId).
          subscribe(data=>{
       this.productFormGroup=this.fb.group({
         id:[data.id,Validators.required],
        name:[data.name,Validators.required],
        price:[data.price,Validators.required],
        qty:[data.qty,Validators.required],
        selected:[data.selected,Validators.required],
        available:[data.available,Validators.required]
      })

    });
  }

  onUpdateProduct() {
    this.productService.updateProduct(this.productFormGroup.value).
    subscribe(data=>{alert("modification avec succée")})
  }
}
