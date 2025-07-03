import { Component, inject, Input, signal, SimpleChange } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Prendas } from '../../model/Prendas';
import { ProductService } from '../../services/Products.service';
import { CommonModule } from '@angular/common';
import { TargetaComponent } from '../../shared/targeta/targeta.component';
import { CartService } from '../../services/cart.service';
import { DetalleProductoComponent } from '../../components/detalle-producto/detalle-producto.component';
import { MensajeComponent } from '../../shared/mensaje/mensaje.component';
import { NotificacionesService } from '../../services/notificaciones.service';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../model/categoria';

@Component({
  selector: 'app-list-product',
  imports: [  CommonModule,
              TargetaComponent, 
              DetalleProductoComponent, 
              MensajeComponent,
              RouterLinkWithHref
            ],
  template: ` 
<div class="contenedor-listado">
  <!-- Filtro por categorías -->
  <nav class="categorias-nav">
    <ul>
      <li>
        <a routerLink="/Prendas/:id" [queryParams]="{}" routerLinkActive="activo" >
          Todos
        </a>
      </li>
      <li *ngFor="let category of categoria()">
        <a 
          routerLink="/Prendas/:" 
          [queryParams]="{ categoryId: category.id }"
          routerLinkActive="activo"
        >
          {{ category.name }}
        </a>
      </li>
    </ul>
  </nav>

  <!-- Lista de productos -->
  <div class="lista-de-tarjetas">
    <app-targeta
      *ngFor="let prenda of Prendas()" 
      [prendas]="prenda"
      (enviarPrenda)="aggAlCarrito(prenda)"
      (verDetalle)="abrirModal(prenda)"
    />
  </div>

  <!-- Notificación -->
  <app-mensaje />

  <!-- Modal detalle producto -->
  <app-detalle-producto
    [product]="selectedProduct()!"
    [isOpen]="isModalOpen()"
    (cerrar)="cerrarModal()" 
  />
</div>

              
              `,
              
  styleUrl: './list-product.component.scss'
})
export class ListProductComponent {

  Prendas = signal<Prendas[]>([]);
  categoria = signal<Categoria[]>([]);
  selectedProduct = signal< Prendas | null >(null);
  isModalOpen = signal(false);
  @Input() category?: string;

  // Hacemos las inyecciones de los servicios
  private servicioPrenda = inject(ProductService);
  private notificacion = inject(NotificacionesService);
  private serviCarrito = inject(CartService);
  private categorias = inject(CategoriaService);

  ngOnInit(): void{
      this.getProductos();
      this.getCategoria();
  }

  private getProductos(){
    this.servicioPrenda.getProducts(this.category)
    .subscribe({
      next:(prendas)=>{
        this.Prendas.set(prendas);
      },
      error:(error)=>{
        console.error('Error en donde? ',error);
      }
    })
  }
  // ------> Aca estamos iniciando con el carrito de compras <------//
  // funcion que envia el producto al Servicio Donde se guaradan los productos
  aggAlCarrito(newPrenda: Prendas){
    this.serviCarrito.addProducto(newPrenda);
    this.notificacion.mostrarMensaje('Agregado con Exito!✔');
  }
  // ---> Vamos a mostrar el detalle del Producto <--- //
  abrirModal(prenda: Prendas){
    this.selectedProduct.set(prenda)
    this.isModalOpen.set(true);
  }
  cerrarModal(){
    this.isModalOpen.set(false);
  }
  // ------> Aca Con el filtrado por categoria <------ //
  private getCategoria(){
    this.categorias.getAll().subscribe({
      next:(data)=>{
        this.categoria.set(data);
      },
      error:(error)=>{
        console.error('Error en donde? ',error);
      }
    })
  }
}