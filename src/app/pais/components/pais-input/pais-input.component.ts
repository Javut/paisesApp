import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter(); //Permite emitir el evento, el cual para este caso seria termino
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit(): void{
    this.debouncer
      .pipe(debounceTime(300)) //Tiempo de espera para mostrar el siguiente valor
      .subscribe(valor => {
      this.onDebounce.emit(valor);
    });
  }

  buscar(){
    this.onEnter.emit( this.termino );
  }

  teclaPresionada (){   //De esta forma se estaria realizando en base a un observable
    this.debouncer.next(this.termino);
  }

}
