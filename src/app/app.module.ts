import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { LojaComponent } from './loja/loja.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { RestritoComponent } from './restrito/restrito.component';
// import { RestritoRoutingModule } from './restrito/restrito-routing.modules';
import { AtualizarProdutoComponent } from './restrito/atualizar-produto/atualizar-produto.component';
import { CadastroProdutoComponent } from './restrito/cadastro-produto/cadastro-produto.component';
import { ListarProdutoComponent } from './restrito/listar-produto/listar-produto.component';
import { MenuProdutoComponent } from './restrito/menu-produto/menu-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    InicioComponent,
    RegistroComponent,
    LojaComponent,
    CarrinhoComponent,
    RestritoComponent,
    // RestritoRoutingModule,
    AtualizarProdutoComponent,
    CadastroProdutoComponent,
    ListarProdutoComponent,
    MenuProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
