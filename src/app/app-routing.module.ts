import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { LojaComponent } from './loja/loja.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { RestritoComponent } from './restrito/restrito.component';
import { AtualizarProdutoComponent } from './restrito/atualizar-produto/atualizar-produto.component';
import { ListarProdutoComponent } from './restrito/listar-produto/listar-produto.component';

const routes: Routes = [
  {path: "registro", component: RegistroComponent},
  {path: "inicio", component: InicioComponent},
  {path: "loja", component: LojaComponent},
  {path: "carrinho", component: CarrinhoComponent},
  {path: "restrito", component: RestritoComponent},
  {path: "atualizar", component: AtualizarProdutoComponent},
  {path: "lista", component: ListarProdutoComponent},
  {path: "", redirectTo:'/inicio', pathMatch:'full'},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
