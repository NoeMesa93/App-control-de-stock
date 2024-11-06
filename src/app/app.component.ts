import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsProductsComponent } from './components/forms-products/forms-products.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { TotalProductsComponent } from './components/total-products/total-products.component';
import { IProduct } from './interfaces/iproduct';
import { productos } from './components/db/productos.db';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsProductsComponent, ListProductsComponent, TotalProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'app_control_stock';
  arrProducts: IProduct[] = productos;
  id: number = 21; // Esto lo hará la BD de datos por nosotros.

  guardarProduct(event: IProduct) {
    event.id = this.id;
    this.arrProducts.push(event);
    this.id++;
  }
}
