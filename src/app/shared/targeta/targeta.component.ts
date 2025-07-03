import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Prendas } from '../../model/Prendas';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-targeta',
  imports: [CommonModule ],
  template:`
  
        <div class="tarjeta">
          <div class="tarjeta-content">
            <h3>{{ prendas.title }}</h3>
            <img 
            [src]="prendas.images[0]"
            (click)="abrirDetalle()" 
            alt="{{ prendas.title }}">
            <p>Precio: {{ prendas.price | currency:'$':'symbol':'1.3' }}</p>
          </div>
          <button (click)="envioDePrenda()" class="agregar">Agregar</button>
        </div>
         `,
  styleUrl: './targeta.component.scss'
})
export class TargetaComponent {
  @Input()prendas!:Prendas;
  @Output() enviarPrenda = new EventEmitter<Prendas>();
  // ---> Aca vamos a enviar el producto que se le hizo click <--- //
  @Output() verDetalle = new EventEmitter<Prendas>();
  @Output() productoAgregado = new EventEmitter<void>();

  

  // ---> Aca enviamos el producto al que se le hizo click <--- //
  envioDePrenda(){  
    this.enviarPrenda.emit(this.prendas);
    this.productoAgregado.emit();
  }

  abrirDetalle(){
    this.verDetalle.emit(this.prendas);
  }
}
