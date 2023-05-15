import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { LojaComponent } from './loja/loja.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const routes: Routes = [
  {path: "registro", component: RegistroComponent},
  {path: "inicio", component: InicioComponent},
  {path: "loja", component: LojaComponent},
  {path: "carrinho", component: CarrinhoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
