import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NotificacionesService } from '../../services/notificaciones.service';

@Component({
  selector: 'app-mensaje',
  imports: [ CommonModule],
  template: `
               <div *ngIf="notificaciones.mensaje()" class="mensaje-exito">
                     {{ notificaciones.mensaje() }}
               </div>

  `,
  styleUrl: './about.component.scss'
})
export class MensajeComponent {
  constructor( public notificaciones: NotificacionesService){
  }
}
