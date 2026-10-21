import { Component } from "@angular/core";

@Component({
    //NOMBRE DEL COMPONENT EN LAS VISTAS 
    selector:"primer-component",
    standalone:false,
   templateUrl:"./primer.component.html",
   styleUrls: ["./primer.component.css"]
})

//CADA COMPONENT DEBE TENER UNA CLASE ASOCIADA EN SU TS 
//EL NOMBRE DE LA CLASE,CADA INICIA EN MAYUSCULA Y DEBEMOS INCLUIR ESTE
//NOMBRE DENTRO DE MODULE PARA PODER UTILIZARLO
export class PrimerComponent{
    //AQUI PODEMOS DECLARAR VARIABLES Y FUNCIONES QUE SE UTILIZARAN EN EL COMPONENTE
    //TIPO DE DATO
    public nombre: string;
    public year: number; 

    //EN ANGULAR , AL IGUAL QUE EN REACT , TENEMOS UN CONSTRUCTOR 
    //ES  DONDE DEBEMOS IINICIALIZAR LOS OBJETOS DE LA CLASE
    constructor(){
        //PARA ACCEDER A LS OBJETOS DE LA CLASE , SE UTILIZA LA 
        //PALABRA RESERVADA THIS
        this.nombre = "Primer Componente";
        this.year = 2024;
    }

    
}
