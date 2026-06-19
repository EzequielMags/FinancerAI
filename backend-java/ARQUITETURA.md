# Backend Java - Financer.IA

Esse módulo é o cérebro do Financer.IA: tudo que envolve regra de negócio, banco de dados e API roda por aqui. Foi construído em Java com Spring Boot, e organizado em camadas pra facilitar manutenção conforme o projeto crescer.

## Como o código está organizado

src/main/java/com/financer/IA/

├── controller/   → porta de entrada das requisições HTTP

├── service/      → onde vive a regra de negócio

├── repository/   → ponte entre o código e o banco de dados

├── entity/       → representa as tabelas do banco

├── dto/          → dados que trafegam entre as camadas

└── config/       → configurações gerais (segurança, JWT...)

## Entendendo as camadas

Pensa num fluxo simples: alguém faz uma requisição → o **Controller** recebe e direciona pro **Service** → o Service aplica as regras de negócio e, se precisar de dados, pede ajuda pro **Repository** → o Repository conversa com o banco usando a **Entity** como referência da estrutura.

Cada camada tem uma responsabilidade só, o que evita misturar "regra de negócio" com "código que recebe requisição HTTP" — duas coisas bem diferentes.

**Controller** — recebe as chamadas HTTP (GET, POST, etc) e devolve as respostas em JSON. Não tem lógica de negócio aqui, só recebe e direciona.

**Service** — é onde a lógica real da aplicação acontece: validações, cálculos, regras específicas do projeto.

**Repository** — interface que fala diretamente com o PostgreSQL através do Spring Data JPA. Praticamente não precisamos escrever SQL manual.

**Entity** — classes que espelham as tabelas do banco, usando anotações como `@Entity` e `@Column` pra fazer esse mapeamento.

## Stack utilizada

- Java 17 + Spring Boot 4.0.6
- Spring Web (API REST)
- Spring Security (autenticação)
- Spring Data JPA (persistência)
- PostgreSQL (banco de dados)
- Maven (gerenciador de dependências)

## O que já existe

**Entidade User** — representa quem acessa o painel administrativo (login via email/senha).
Campos: `id`, `name`, `email`, `password`, `phoneNumber`, `active`, `createdAt`

**Endpoints**

| Rota | Método | O que faz |
|---|---|---|
| `/health` | GET | Confirma que a API está no ar |
