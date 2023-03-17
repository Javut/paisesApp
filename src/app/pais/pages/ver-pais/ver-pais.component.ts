import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit{

  pais!: Country;

  constructor(
        private activatedRouted: ActivatedRoute,
        private paisService: PaisService
                 ){ } //El ActivatedRoute viene con todo lo necesario para suscribirnos a cualquier cambio del URL

  ngOnInit(): void {

    this.activatedRouted.params
      .pipe(
        switchMap( ({id}) => this.paisService.getPaisPorCodigo( id ) ),   //El switchMap permite recibir un observable y regresar otro observable
        tap(resp => console.log("Respuesta------------------ "+resp))                                              // El tap es un operador que dispara un efecto secundario
        )
      .subscribe( pais => this.pais = pais[0] );

    // this.activatedRouted.params
    //   .subscribe( ({ id }) => {
    //     console.log(id);

    //     this.paisService.getPaisPorCodigo(id)
    //       .subscribe( pais => {
    //         console.log(pais);
    //       });
    //   });

  }



}
