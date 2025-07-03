import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { DestacadosComponent } from '../../shared/destacados/destacados.component';



@Component({
  selector: 'app-home',
  imports: [ BannerComponent, HeroComponent, DestacadosComponent ],
  template: `
            <app-banner />
            <app-destacados />
            <app-hero />

            `,
})
export class HomeComponent {

}
