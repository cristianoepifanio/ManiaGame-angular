import { Component } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent {
  games:string[] = []
  constructor(){
    this.games = [
      "nome do jogo",
      "descrição do jogo",
      "preco do jogo",
    ]
  }

}
