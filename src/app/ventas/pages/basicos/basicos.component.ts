import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'john';
  nombreUpper: string = 'JOHN';
  nombreCompleto: string = 'jHOn cUeva';

  fecha: Date = new Date();
}
