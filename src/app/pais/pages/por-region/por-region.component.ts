import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
      button {
        margin-right: 5px;
      }
  ` ]
})
export class PorRegionComponent {

  region: string = "";
  hayError: boolean = false;
  regions : Country[] = [];

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  constructor(private paisService: PaisService){}

  showTable(region: string){
    console.log("Aqui va mi table:  "+ region);
    this.hayError = false;
    this.region = region;
    console.log(this.region);

    this.paisService.buscarRegion(this.region).subscribe((regiones) => {
      console.log(regiones);
      this.regions = regiones
    }, (err) => {
      this.hayError=true;
      this.regions = [];
    });
  }

  // buscarPorRegion(region: string){


  // }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  activarRegion(region : string){

    if( region === this.regionActiva){return;}

    this.regionActiva = region;
    this.regions = [];
  }

}
