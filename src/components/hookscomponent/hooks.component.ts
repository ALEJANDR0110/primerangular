import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'hooks-component',
    standalone: false,
    templateUrl: './hooks.component.html'

})
export class HooksComponent implements OnInit {
   public mensaje: string;

   constructor(){
    console.log("Constructor del componente HooksComponent");
    this.mensaje = "Hola desde el constructor del componente HooksComponent";
   }

   ngOnInit(): void {
    console.log("ngOnInit del componente HooksComponent");
   }

   ngDoCheck(): void {
    console.log("ngDoCheck: Me ejecuto al cambiar el render ");
   }

   cambiarMensaje(): void {
    this.mensaje = "Mensaje cambiado desde el método cambiarMensaje()";
    }

}