import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Para o [routerLink]
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { ListagemPessoasComponent } from './listagem-pessoas/listagem-pessoas.component';
import { EdicaoPessoaComponent } from './edicao-pessoa/edicao-pessoa.component';

@NgModule({
  declarations: [
    CadastroPessoaComponent,
    ListagemPessoasComponent,
    EdicaoPessoaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule // Para garantir que routerLink funcione
  ]
})
export class PagesModule { }
