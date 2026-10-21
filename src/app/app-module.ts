import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HooksComponent } from '../components/hookscomponent/hooks.component';
import { DeportesComponent } from '../components/deportescomponent/deportes.component';
import { FormsModule } from '@angular/forms';
import { FormsBindingComponent } from '../components/formsbindingcomponent/forms.binding.component';
import { SumarNumerosComponent } from '../components/sumarnumeroscomponent/sumar.numeros.component';
import { ListaMultiplicarReferencia } from '../components/lista-multiplicar-referencia/lista-multiplicar-referencia';
import { TablaMultiplicarBinding } from '../components/tabla-multiplicar-binding/tabla-multiplicar-binding';

@NgModule({
  declarations: [
    App,
    PrimerComponent,
    HooksComponent,
    DeportesComponent,
    FormsBindingComponent,
    SumarNumerosComponent,
    ListaMultiplicarReferencia,
    TablaMultiplicarBinding
  ],
  imports: [BrowserModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
