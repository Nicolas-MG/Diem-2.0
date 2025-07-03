import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Prendas } from '../../model/Prendas';
import { CartService } from '../../services/cart.service';
import { MensajeComponent } from '../../shared/mensaje/mensaje.component';
import { NotificacionesService } from '../../services/notificaciones.service';


@Component({
  selector: 'app-detalle-producto',
  imports: [ CommonModule, MensajeComponent ],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.scss'
})
export class DetalleProductoComponent {
  @Input() product!: Prendas;
  @Input() isOpen: boolean = false;
  @Output() cerrar = new EventEmitter<void>();

  // Hacemos la injeccion de las notificaciones
  private notificacion = inject(NotificacionesService)

  // hacemos la injeccion del servicio de cartService
  private servicarrito = inject(CartService);

  // funcion para agregar al carrito
  aggAlCarrito(newPrenda: Prendas){
    this.servicarrito.addProducto(newPrenda);
    this.notificacion.mostrarMensaje('Agregado Con Exito!✔');
  }
  cerrarModal(){
    this.cerrar.emit();
  }
}
