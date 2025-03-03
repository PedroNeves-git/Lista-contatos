import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarPessoaComponent } from './components/adicionar-pessoa/adicionar-pessoa.component'; // Importando o componente
import { CardComponent } from './components/card/card.component';
import { AppComponent } from './app.component';
import { EditarPessoaComponent } from './components/editar-pessoa/editar-pessoa.component'; // Importe o componente EditarPessoaComponent


const routes: Routes = [
  { path: 'adicionar-pessoa', component: AdicionarPessoaComponent }, // Página para adicionar pessoa
  { path: 'editar-pessoa/:id', component: EditarPessoaComponent }, // Página de edição de pessoa
  { path: '**', redirectTo: '/' } // Redirecionamento para a página principal em caso de erro
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
