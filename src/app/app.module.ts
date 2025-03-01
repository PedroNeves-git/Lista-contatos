import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'; // Adicione essa linha
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroPessoaComponent } from './pages/cadastro-pessoa/cadastro-pessoa.component';
import { ListagemPessoasComponent } from './pages/listagem-pessoas/listagem-pessoas.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroPessoaComponent,
    ListagemPessoasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    ReactiveFormsModule // Se já houver rotas configuradas, mantenha-as aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
