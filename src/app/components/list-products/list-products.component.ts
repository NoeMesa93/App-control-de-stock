import { Component, Input } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { CardProductComponent } from '../card-product/card-product.component';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CardProductComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {

  @Input() ourProducts: IProduct[] = [];

  ngOnInit() {
    //Esto me permite comprobar si el array de productos ha llegado a mi componente.
    console.log('lista', this.ourProducts)
  }

}
