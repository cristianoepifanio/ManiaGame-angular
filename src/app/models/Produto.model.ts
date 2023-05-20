export class Produto{
    id: number = 0;
    produto: string = "";
    descricao: string = "";
    preco: number = 0;

    constructor(id:number,produto:string,descricao:string,preco:number){
        this.id = id;
        this.produto = produto;
        this.descricao = descricao;
        this.preco = preco;
        }
}