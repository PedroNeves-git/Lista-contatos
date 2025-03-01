import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PessoaService } from '../../services/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../../models/pessoa.model';

@Component({
  selector: 'app-edicao-pessoa',
  templateUrl: './edicao-pessoa.component.html',
  styleUrls: ['./edicao-pessoa.component.scss']
})
export class EdicaoPessoaComponent implements OnInit {
  pessoaForm!: FormGroup;
  pessoaId!: number;

  constructor(
    private fb: FormBuilder,
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pessoaId = +this.route.snapshot.paramMap.get('id')!;
    this.pessoaForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cep: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      endereco: ['', Validators.required],
      cidade: ['', Validators.required],
      uf: ['', [Validators.required, Validators.maxLength(2)]],
      ativo: [true]
    });

    this.pessoaService.buscarPessoaPorId(this.pessoaId).subscribe(pessoa => {
      this.pessoaForm.patchValue(pessoa);
    });
  }

  atualizar(): void {
    if (this.pessoaForm.valid) {
      this.pessoaService.atualizarPessoa(this.pessoaId, this.pessoaForm.value).subscribe(() => {
        alert('Pessoa atualizada com sucesso!');
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
