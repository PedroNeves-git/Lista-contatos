import { Pessoa } from 'src/app/models/pessoa.model';
import { Endereco } from 'src/app/models/endereco.model';
import { PessoaService } from './../../services/pessoa.service';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'adicionar-pessoa',
  templateUrl: './adicionar-pessoa.component.html',
  styleUrls: ['./adicionar-pessoa.component.scss'],
})
export class AdicionarPessoaComponent implements AfterViewInit {
  id?: number;
  pessoa?: Pessoa;
  mensagemModal: string = '';
  @ViewChild('meuModal', { static: false }) meuModal!: ElementRef;

  formCadastro: FormGroup = new FormGroup({
    nome: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100),
    ]),
    cep: new FormControl(null, [Validators.pattern('^\\d{8}$')]),
    endereco: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(150),
    ]),
    cidade: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(100),
    ]),
    uf: new FormControl(null),
  });

  ufLista: string[] = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS',
    'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC',
    'SP', 'SE', 'TO'
  ];

  constructor(
    private readonly pessoaService: PessoaService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id !== undefined) {
      this.pessoaService.buscarPessoaPorId(this.id).subscribe({
        next: (response: Pessoa) => {
          this.pessoa = response;
          this.preencherFormulario();
        },
        error: (error) => console.error(error.message),
      });
    }
  }

  ngAfterViewInit() {
    if (!this.meuModal) {
      console.error("Elemento do modal não foi encontrado após a inicialização.");
    }
  }

  preencherFormulario() {
    if (this.pessoa) {
      this.formCadastro.patchValue({
        nome: this.pessoa.nome,
        cep: this.pessoa.cep,
        endereco: this.pessoa.endereco,
        cidade: this.pessoa.cidade,
        uf: this.pessoa.uf,
      });
    }
  }

  registrarUsuario() {
    const pessoa = this.formatarDadosFormulario();
    this.pessoaService.cadastrarPessoa(pessoa).subscribe({
      next: () => {
        this.mensagemModal = `${pessoa.nome} cadastrada com sucesso!`;
        this.abrirModal();
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
      },
      error: (error) => this.exibirErros(error)
    });
  }

  atualizarCadastro() {
    if (!this.id) return;
    const pessoa = this.formatarDadosFormulario();

    this.pessoaService.atualizarPessoa(this.id!, pessoa).subscribe({
      next: () => {
        this.mensagemModal = 'Alterações salvas com sucesso!';
        this.abrirModal();
        this.router.navigate(['/']);
      },
      error: (error) => this.exibirErros(error)
    });
  }

  buscarEndereco() {
    const cepControl = this.formCadastro.get('cep');
    if (cepControl?.valid) {
      const cep = cepControl.value;
      this.pessoaService.getEnderecoPorCep(cep).subscribe({
        next: (endereco: Endereco) => {
          if (endereco.erro) {
            cepControl?.setErrors({ invalidCep: true });
            this.verificarCepInvalido();
            return;
          }
          this.formCadastro.patchValue({
            endereco: endereco.logradouro || '',
            cidade: endereco.localidade || '',
            uf: endereco.uf || ''
          });
        },
        error: () => this.verificarCepInvalido()
      });
    }
  }

  private exibirErros(error: any) {
    this.mensagemModal = typeof error.error === 'string' ? error.error : 'Erro ao processar a requisição.';
    this.abrirModal();
  }

  private verificarCepInvalido() {
    this.mensagemModal = 'O CEP informado é inválido.';
    this.abrirModal();
  }

  private abrirModal() {
    if (this.meuModal?.nativeElement) {
      try {
        const modalElement = new bootstrap.Modal(this.meuModal.nativeElement);
        modalElement.show();
      } catch (error) {
        console.error("Erro ao abrir o modal. Certifique-se de que o Bootstrap está carregado.", error);
      }
    } else {
      console.error("Elemento do modal não encontrado.");
    }
  }

  private formatarDadosFormulario(): Pessoa {
    const rawValue = this.formCadastro.getRawValue();
    return {
      ...rawValue,
      nome: rawValue.nome || null,
      cep: rawValue.cep || null,
      endereco: rawValue.endereco || null,
      cidade: rawValue.cidade || null,
      uf: rawValue.uf || null,
    };
  }
}
