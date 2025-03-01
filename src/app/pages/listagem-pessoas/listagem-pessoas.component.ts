import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../models/pessoa.model';

@Component({
  selector: 'app-listagem-pessoas',
  templateUrl: './listagem-pessoas.component.html',
  styleUrls: ['./listagem-pessoas.component.scss']
})
export class ListagemPessoasComponent implements OnInit {
  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.carregarPessoas();
  }

  carregarPessoas(): void {
    this.pessoaService.listarPessoas().subscribe(dados => {
      this.pessoas = dados;
    });
  }

  excluirPessoa(id: number | undefined) {
    if (id === undefined) {
      console.error("Erro: ID da pessoa é indefinido.");
      return;
    }
    // Sua lógica para excluir
  }

}
