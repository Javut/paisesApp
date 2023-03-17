import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent {


  @Input('paises') paises : Country[] = [];  //Para este caso se reciben datos desde el componente por-pais-component.ts
  // @Input('capitales') capitales : Capital[] = [];  //Para este caso se reciben datos desde el componente por-pais-component.ts





}
