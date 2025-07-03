import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartService } from '../../services/cart.service';



@Component({
  selector: 'app-navbar',
  imports: [ CommonModule, RouterLink, FontAwesomeModule ],
  template: `
              <nav class="navbar">
                <div class="logo">
                  <a routerLink="/">DIEM</a>
                </div>
                <ul class="nav-links">
                  <li><a routerLink="/Prendas/:id">Tienda</a></li>
                  <li>
                    <div class="cart-icon-wrapper">
                      <button (click)="cart.toggleSidebar()">
                      <fa-icon [icon]="faShoppingCart"></fa-icon>
                      </button>
                      <span class="cart-count" *ngIf="cart.carritoDeCompras().length > 0">
                        {{ cart.carritoDeCompras().length }}</span>
                    </div>
                  </li>      
               </ul>
              </nav>
  
  `,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  faShoppingCart = faShoppingCart;
  constructor(public cart: CartService) {}


}
