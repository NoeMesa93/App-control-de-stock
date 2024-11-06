import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-forms-products',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms-products.component.html',
  styleUrl: './forms-products.component.css'
})
export class FormsProductsComponent {

  @Output() productEmit:EventEmitter<IProduct> = new EventEmitter();

  productForm: FormGroup;

  constructor() {
    this.productForm = new FormGroup({
      title: new FormControl(null, []),
      price: new FormControl(null, []),
      quantity: new FormControl(null, []),
   }, [])
  }
  
  getDataProduct() {
    // Cuando tengo el producto se lo paso al padre (app-component)
    this.productEmit.emit(this.productForm.value);
    this.productForm.reset();
  }
}
