📌 Controle de Contatos - Frontend

Este repositório contém o frontend do projeto Controle de Contatos, desenvolvido em Angular 16 para consumir a API em Spring Boot. O objetivo do projeto é gerenciar um cadastro de pessoas e seus respectivos meios de contato, fornecendo uma interface amigável para os usuários.

🛠 Tecnologias Utilizadas

Angular 16 → Framework principal para o frontend.

TypeScript → Linguagem utilizada no desenvolvimento.

Bootstrap → Biblioteca de estilos para responsividade e componentes visuais.

RxJS → Biblioteca para programação reativa e manipulação de dados assíncronos.

Angular CLI → Ferramenta para gerenciamento e execução do projeto.

💻 Como Executar o Projeto

📌 Pré-requisitos

Requisitos para rodar o projeto localmente:

Node.js 18+

Angular CLI 16+

Um editor de código (VSCode, WebStorm, etc.)

📥 Instalação e Execução

Clone o projeto

  git clone https://github.com/PedroNeves-git/controle-contatos-angular.git

Entre no diretório do projeto

  cd controle-contatos-angular

Instale as dependências

  npm install

Execute o projeto

  ng serve

Acesse no navegador:

  http://localhost:4200

📌 Configuração de Ambiente

Caso precise configurar a API base, altere o arquivo environment.ts localizado em:

  src/environments/environment.ts

Exemplo:

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};

Para ambiente de produção, ajuste o arquivo environment.prod.ts.

📌 Funcionalidades Principais

✅ Listagem de contatos cadastrados.✅ Cadastro de novos contatos.✅ Atualização de informações do contato.✅ Exclusão de contatos.✅ Validação de formulários.✅ Comunicação com a API em Spring Boot.

📌 Contribuições

Sinta-se à vontade para contribuir com melhorias para o projeto. Basta:

Fazer um fork do repositório.

Criar uma branch com a nova feature ou correção:

git checkout -b minha-feature

Fazer o commit das alterações:

git commit -m "Minha nova feature"

Enviar as alterações para o repositório remoto:

git push origin minha-feature

Abrir um pull request.

👨‍💻 Desenvolvido por Pedro Neves 🚀
