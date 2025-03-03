import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'; // Importe o Router
import { Pessoa } from 'src/app/models/pessoa.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() pessoa: any;

  constructor(private router: Router) {}

  editarContato() {
    // Redireciona para a página de edição de pessoa, passando o id da pessoa
    this.router.navigate(['/editar-pessoa', this.pessoa.id]);
  }
}
