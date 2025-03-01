export interface Pessoa {
  id?: number;
  nome: string;
  cep: string;
  endereco: string;
  cidade: string;
  uf: string;
  contatos: string[]; // Pode conter URLs de imagens de contatos
}
