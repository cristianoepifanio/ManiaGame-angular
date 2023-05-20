import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent} from './cadastro-produto/cadastro-produto.component';
import { AtualizarProdutoComponent} from './atualizar-produto/atualizar-produto.component';
import { ListarProdutoComponent} from './listar-produto/listar-produto.component';
import { RestritoComponent } from './../restrito/restrito.component';

const restritoRoutes: Routes = [
    {path: "restrito", component: RestritoComponent, children:[
        {path: "cadastro", component: CadastroProdutoComponent },
        {path: "atualizar", component: AtualizarProdutoComponent},
        {path: "listar", component: ListarProdutoComponent},
    ]}, 
    
  {path: "", redirectTo:'/restrito/listar', pathMatch:'full'},

  
];

@NgModule({
  imports: [RouterModule.forChild(restritoRoutes)],
  exports: [RouterModule]
})
export class RestritoRoutingModule { }
