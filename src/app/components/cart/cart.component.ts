import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart',
  imports: [ CommonModule ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
   carro = inject(CartService); 
}
