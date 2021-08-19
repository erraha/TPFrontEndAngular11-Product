import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../services/products.service";


@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {
   //productFormGroup?:FormGroup;
  productFormGroup = new FormGroup ({
    name: new FormControl(),
    price: new FormControl(),
    qty: new FormControl(),
    selected: new FormControl(),
    available: new FormControl()
  });
  submitted:boolean=false;
  constructor(private fb:FormBuilder,private productService:ProductsService) { }

  ngOnInit(): void {
    this.productFormGroup=this.fb.group({

      name:["",Validators.required],
      price:[0,Validators.required],
      qty:[0,Validators.required],
      selected:[true,Validators.required],
      available:[true,Validators.required]
    });
  }

  onSaveProduct() {
    this.submitted=true;
    if (this.productFormGroup.invalid) return;
    this.productService.saveProducts(this.productFormGroup.value)
           .subscribe(data=>{alert("ajout produit réussi")});
  }
}
