import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lista-multiplicar-referencia',
  standalone: false,
  styleUrl: './lista-multiplicar-referencia.css',
  templateUrl: './lista-multiplicar-referencia.html',
})
export class ListaMultiplicarReferencia {
    public listaMult: Array<number>;
    @ViewChild("cajanumero") cajanumero!: ElementRef;

    constructor() {
      this.listaMult = []
    }

    generarLista(): void {
      let aux = 0;
      let auxLista = [];
      
      for(let i = 1; i <= 10; i++) {
        aux = parseInt(this.cajanumero.nativeElement.value) * i;
        auxLista.push(aux)
      }

      this.listaMult = auxLista
    }
}