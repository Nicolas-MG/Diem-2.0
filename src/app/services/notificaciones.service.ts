import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  // Aca creamos una señal para el mensaje de agregado
  mensaje = signal<string | null>(null);
  
  // Funcion para mostrar el mensaje de agregado
  mostrarMensaje(mensaje: string){
    this.mensaje.set(mensaje);
    // Ocultar el mensaje
    setTimeout(() => this.mensaje.set(null), 1500);

  }
}
