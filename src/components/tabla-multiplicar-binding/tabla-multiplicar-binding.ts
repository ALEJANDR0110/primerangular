import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar-binding',
  standalone: false,
  styleUrl: './tabla-multiplicar-binding.css',
  templateUrl: './tabla-multiplicar-binding.html',
})
export class TablaMultiplicarBinding {
  public tablaMult: {operacion: string, resultado: number} [];
  @ViewChild("cajanumero") cajanumero!: ElementRef;

  constructor() {
    this.tablaMult = [];
  }

  generarTabla(): void {
    let auxString = ""
    let auxInt = 0;
    let auxLista = [];
      
    for(let i = 1; i <= 10; i++) {
      auxString = i + " * " + this.cajanumero.nativeElement.value
      auxInt = parseInt(this.cajanumero.nativeElement.value) * i;
      auxLista.push({
        operacion: auxString,
        resultado: auxInt
      })
    }

    this.tablaMult = auxLista
  }
} 
