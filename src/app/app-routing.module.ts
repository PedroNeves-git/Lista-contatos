import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdicionarPessoaComponent } from './components/adicionar-pessoa/adicionar-pessoa.component';
import { EditarPessoaComponent } from './components/editar-pessoa/editar-pessoa.component';
import { DetalhesPessoaComponent } from './components/detalhes-pessoa/detalhes-pessoa.component';


const routes: Routes = [
  { path: '', component: AppComponent }, // Página inicial com a lista de pessoas
  { path: 'adicionar-pessoa', component: AdicionarPessoaComponent }, // Página de cadastro
  { path: 'editar-pessoa/:id', component: EditarPessoaComponent }, // Página de edição
  { path: 'detalhes-pessoa/:id', component: DetalhesPessoaComponent } // Página de detalhes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
