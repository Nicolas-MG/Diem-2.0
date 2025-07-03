import { Injectable, signal } from '@angular/core';
import { Prendas } from '../model/Prendas';
import { ProductoEnCarrito } from '../model/ProductoEnCarrito';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // ---> Creamos la señal que guardara los datos del carrito de compras <--- //
  private carritoSignal = signal<ProductoEnCarrito[]>([]);
  // ---> Devolvemos el estado Actual del carrito <--- //
  carritoDeCompras(){
    return this.carritoSignal();
  }
  // ---> Creamos la funcion que agregara la Prenda al carrito <--- //
  addProducto(newPrenda: Prendas){
    const actual = this.carritoSignal();
    const index = actual.findIndex(item => item.producto.id === newPrenda.id);
    if (index !== -1){
      // Ya existe, entonces sumamos la cantidad
      const copia = [...actual];
      copia[index].cantidad ++;
      this.carritoSignal.set(copia);
    } else {
      // No existe, entonces agregamos la prenda al carrito
      this.carritoSignal.set([...actual, { producto: newPrenda, cantidad: 1}]);
    }
  }
  // ---> Creamos la funcion que elimina la prenda del carrito <--- //
  eliminarProducto(id: number){
    const actual = this.carritoSignal();
    const actualizado = actual.filter(item => item.producto.id !== id);
    this.carritoSignal.set(actualizado);
  }
  // ---> Funcion que vacia el carrito <--- //
  vaciarCarrito(){
    this.carritoSignal.set([]);
  }
  // ---> Funcion que disminuye la cantidad de las prendas <--- //
  disminuirCantidad(id: number){
    const actual = this.carritoDeCompras();
    const copia = [...actual];
    const index = copia.findIndex(item => item.producto.id === id);

    if (index !== -1){
      if (copia[index].cantidad > 1){
        copia[index].cantidad --;
        this.carritoSignal.set(copia);
        } else {
          this.eliminarProducto(id);
      }
    }

  }

  // ---> Funcion que devuelve el total del precio del carrito <--- //
  getTotal() {
  return this.carritoSignal().reduce((acc, item) => acc + item.producto.price * item.cantidad, 0);
}
  // ----> Vamos a iniciar con el sidebar ( Carrito ) <---- //
  private _mostrarSidebar = signal(false);
  mostrarSidebar = this._mostrarSidebar.asReadonly();

    toggleSidebar() {
      this._mostrarSidebar.update(v => !v);
    }
  
    cerrarSidebar() {
      this._mostrarSidebar.set(false);
    }

}
