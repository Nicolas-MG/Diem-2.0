import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-banner',
  imports: [ CommonModule, RouterLink ],
  template: `
              <section class="hero">
                <div class="hero__overlay">
                  <div class="hero__content">
                    <p class="hero__subtitle">Sientete bien, Viste bien, Vive Diem 🦍🔥</p>
                    <button class="hero__btn" routerLink="Prendas/:id">Ver colección</button>
                  </div>
                </div>
              </section>
              `,
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  

}
