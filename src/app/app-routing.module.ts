import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemPessoasComponent } from './pages/listagem-pessoas/listagem-pessoas.component';
import { CadastroPessoaComponent } from './pages/cadastro-pessoa/cadastro-pessoa.component';
import { EdicaoPessoaComponent } from './pages/edicao-pessoa/edicao-pessoa.component';

const routes: Routes = [
  { path: '', component: ListagemPessoasComponent },
  { path: 'cadastro', component: CadastroPessoaComponent },
  { path: 'edicao/:id', component: EdicaoPessoaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
