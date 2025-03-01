import { Component, Input } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() pessoa: any;

  editarContato() {
    console.log('Editar contato:', this.pessoa.nome);
  }
}
