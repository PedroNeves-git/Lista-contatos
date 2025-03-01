import { Component, OnInit } from '@angular/core';
import { PessoaService } from './services/pessoa.service';
import { Pessoa } from './models/pessoa.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lista-contatos';
  pessoas: Pessoa[] = []; // Define explicitamente o tipo como Pessoa[]

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.pessoaService.listarPessoas().subscribe({

      next: (dados) => {
        console.log("Dados recebidos da API:", dados);
        this.pessoas = dados || []; // Garante que não seja undefined
      },
      error: (erro) => {
        console.error("Erro ao buscar pessoas", erro);
        this.pessoas = []; // Evita que o template quebre
      }
    });
  }
}
