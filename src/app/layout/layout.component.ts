import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CartComponent } from '../components/cart/cart.component';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-layout',
  imports: [ RouterModule, NavbarComponent, FooterComponent, CartComponent, CommonModule ],
  template: ` 
              <app-navbar class="navbar" />
              <app-cart />
              <div class="content">
                <router-outlet />
                <app-footer />
              </div>
              
              `,
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  constructor(public cart: CartService ){}
}
