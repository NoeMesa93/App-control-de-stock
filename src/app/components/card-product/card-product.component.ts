import { Component, Input } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';


@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {

  @Input() par: boolean = false;
  @Input() impar: boolean = false;
  @Input() myProduct!: IProduct;


}
