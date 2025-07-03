import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, CommonModule, ],
  template: '<router-outlet />'
})
export class AppComponent {
}
