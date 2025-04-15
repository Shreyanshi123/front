import { Component } from '@angular/core';
import { FormGroup, 
 FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
    productForm = new FormControl({
      ProductId: new FormControl(),
      Categpry:new FormControl(),
      ProductName : new FormControl(),
      Price: new FormControl(),
      Quantity:new FormControl(),
      Features : new FormControl()

    })
}
