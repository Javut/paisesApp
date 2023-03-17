import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  termino: string = "";
  hayError: boolean = false;
  capitales : Country[] = [];

  constructor(private paisService: PaisService ){}

  buscarCapital(termino: string){
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);

    this.paisService.buscarCapital(this.termino).subscribe( (capitales) => {
      this.capitales = capitales;
      console.log("AQUI ESTAN MIS RESULTADOS ------------------------------------- ");


    }, (err) => {
      this.hayError=true;
      this.capitales = [];
    });


  }

}
