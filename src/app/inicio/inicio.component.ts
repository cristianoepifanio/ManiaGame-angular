import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto.model';
import { ProdutoService } from '../produto.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

    // public produtos: Produto[] = [];
    // constructor(private _ProdutoService:ProdutoService){}
    // ngOnInit(): void {
    //   this.listarProdutos();
    // }

    // listarProdutos():void{
    //   this._ProdutoService.getProdutos().subscribe(
    //     retornaProduto =>{
    //       this.produtos = retornaProduto.map(
    //         item => {
    //           return new Produto(
    //             item.id, item.produto, item.descricao, item.preco
    //           );
    //         }
    //       )
    //     }
    //   )
    // }
}
