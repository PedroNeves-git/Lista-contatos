import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Adicione essa linha
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PessoaService } from './services/pessoa.service';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { AdicionarPessoaComponent } from './components/adicionar-pessoa/adicionar-pessoa.component';
import { EditarPessoaComponent } from './components/editar-pessoa/editar-pessoa.component';
import { DetalhesPessoaComponent } from './components/detalhes-pessoa/detalhes-pessoa.component';
import { TablePessoaComponent } from './components/table-pessoa/table-pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CardComponent,
    AdicionarPessoaComponent,
    EditarPessoaComponent,
    DetalhesPessoaComponent,
    TablePessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule // Se já houver rotas configuradas, mantenha-as aqui
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
