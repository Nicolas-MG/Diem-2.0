import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/Products.service';
import { Prendas } from '../../model/Prendas';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-destacados',
  imports: [ CommonModule, RouterLink ],
  template: `

  <section class="destacados">
  <h2>Productos Destacados</h2>
  <div class="grid">
    <div class="tarjeta" *ngFor="let producto of productoDestacados">
      <img [src]="producto.images" [alt]="producto.title" />
      <h3>{{ producto.title }}</h3>
      <p>{{ producto.price| currency:'COP':'symbol' }}</p>
      <button ><a routerLink="/Prendas" class="A">Ver más</a></button>
    </div>
  </div>
</section>

  `,
  styleUrl: './destacados.component.scss'
})
export class DestacadosComponent {
   
  private servicioPrenda = inject(ProductService);
  productoDestacados : Prendas [] = []

  ngOnInit() {
    this.servicioPrenda.getProducts().subscribe((productos) =>{
      this.productoDestacados = productos.slice(0, 5);
    })
  }

}
