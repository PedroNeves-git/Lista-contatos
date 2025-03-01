import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PessoaService } from '../../services/pessoa.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.scss']
})
export class CadastroPessoaComponent implements OnInit {
  pessoaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private pessoaService: PessoaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pessoaForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cep: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      endereco: ['', Validators.required],
      cidade: ['', Validators.required],
      uf: ['', [Validators.required, Validators.maxLength(2)]],
      ativo: [true]
    });
  }

  salvar(): void {
    if (this.pessoaForm.valid) {
      this.pessoaService.cadastrarPessoa(this.pessoaForm.value).subscribe(() => {
        alert('Pessoa cadastrada com sucesso!');
        this.router.navigate(['/']);
      });
    }
  }

  preencherEndereco(): void {
    const cep = this.pessoaForm.get('cep')?.value;
    if (cep.length === 8) {
      this.pessoaService.getEnderecoPorCep(cep).subscribe(dados => {
        this.pessoaForm.patchValue({
          endereco: `${dados.logradouro}, ${dados.bairro}`,
          cidade: dados.localidade,
          uf: dados.uf
        });
      });
    }
  }
}
