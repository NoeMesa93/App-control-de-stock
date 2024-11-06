import { Component, Input } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-total-products',
  standalone: true,
  imports: [],
  templateUrl: './total-products.component.html',
  styleUrl: './total-products.component.css'
})
export class TotalProductsComponent {

  @Input() ourProducts: IProduct[] = [];

  cantidadTotal: number = 0;
  precioTotal: number = 0;

  // Esta función del ciclo de vida de un componente se llama siempre que interactuemos con el html. 
  ngDoCheck() {
    this.cantidadTotal = 0;
    this.precioTotal = 0;
    for (let producto of this.ourProducts) {
      this.cantidadTotal += producto.quantity;
      this.precioTotal += producto.price * producto.quantity;
    }
  }


}
