Controle de Contatos - Frontend (Angular)

Esse projeto foi desenvolvido para consumir a API de gerenciamento de contatos, utilizando Angular para a construção do frontend. O objetivo principal é possibilitar o cadastro, edição, visualização e exclusão de pessoas e seus respectivos contatos.

🛠 Tecnologias Utilizadas

Angular 16 → Framework principal para construção da interface.

TypeScript → Linguagem utilizada para desenvolvimento do projeto.

Bootstrap → Framework CSS para estilização e responsividade.

RxJS → Biblioteca para programação reativa e manipulação de streams de dados.

Angular CLI → Ferramenta para gerenciamento do projeto Angular.

Node.js & npm → Ambiente necessário para rodar o Angular e gerenciar pacotes.

💻 Como Executar o Projeto

📌 Pré-requisitos

Recomendados:

Node.js (LTS) e npm

Um editor de código (VS Code, WebStorm, etc.)

Angular CLI instalado globalmente:

  npm install -g @angular/cli

Passos para execução

1️⃣ Clone o projeto

  git clone https://github.com/PedroNeves-git/controle-contatos-frontend.git

2️⃣ Entre no diretório do projeto

  cd controle-contatos-frontend

3️⃣ Instale as dependências do projeto

  npm install

4️⃣ Inicie a aplicação

  ng serve

5️⃣ Acesse o sistema pelo navegador

  http://localhost:4200

📌 Configuração da API

Para que o frontend funcione corretamente, a API em Spring Boot precisa estar rodando localmente na porta 8080.

Endpoints da API:

API Base URL: http://localhost:8080

Endpoint principal: http://localhost:8080/api/pessoas

Se necessário, edite a URL da API no arquivo:

src/environments/environment.ts

📌 Funcionalidades

✔️ Listagem de contatos cadastrados.
✔️ Cadastro de novos contatos.
✔️ Edição de informações de um contato existente.
✔️ Exclusão de contatos.
✔️ Busca de endereços via CEP (integração com a API ViaCEP).

Sinta-se à vontade para contribuir! 🚀

👨‍💻 Desenvolvido por Pedro Neves
