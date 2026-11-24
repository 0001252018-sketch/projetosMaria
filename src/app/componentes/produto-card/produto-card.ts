import { Component } from '@angular/core';
import { Produto } from  '../../models/produto.model';

@Component({
  imports: [],
  standalone:true,

  selector: 'app-produto-card',
  styleUrl: './produto-card.css',


  templateUrl: './produto-card.html',
})
export class ProdutoCard {
  item: Produto={
    id: 1,
   nome:'Notebook',
    preco:3500,
    quantidade: 10
  }

}
