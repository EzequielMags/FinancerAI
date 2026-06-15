# Backend Node.js - FinancerAI

## 📌 Sobre o Projeto

O módulo **Backend Node.js** do FinancerAI é responsável pelo processamento inteligente das mensagens enviadas pelos usuários.

Sua principal função é atuar como camada de integração entre os diferentes componentes da plataforma, recebendo mensagens, realizando validações, comunicando-se com os serviços de Inteligência Artificial e enviando dados estruturados para os demais sistemas da aplicação.

Este módulo foi desenvolvido utilizando **Node.js** e **Fastify**, seguindo uma arquitetura em camadas para garantir escalabilidade, organização e facilidade de manutenção.

---

## 🎯 Objetivo

Transformar mensagens enviadas pelos usuários em informações financeiras estruturadas.

Exemplo:

**Entrada:**

```text
Gastei R$ 50 no Uber
```

**Saída esperada:**

```json
{
  "type": "expense",
  "amount": 50,
  "category": "transport"
}
```

Esses dados poderão ser posteriormente armazenados e processados pelo backend Java da aplicação.

---

## 🏗️ Arquitetura

O projeto segue uma arquitetura baseada em responsabilidades bem definidas.

```text
Request
   ↓
Routes
   ↓
Controllers
   ↓
Services
   ↓
Integrations / AI
   ↓
Response
```

### Routes

Responsáveis por registrar e direcionar as requisições para seus respectivos Controllers.

Exemplo:

```text
POST /message
↓
MessageController
```

---

### Controllers

Responsáveis por receber as requisições HTTP, validar os dados de entrada e encaminhar o processamento para os Services.

Responsabilidades:

* Receber Request e Response
* Validar parâmetros recebidos
* Chamar Services
* Retornar respostas HTTP

---

### Services

Responsáveis pela regra de negócio da aplicação.

Responsabilidades:

* Processar mensagens
* Interpretar dados recebidos
* Coordenar integrações externas
* Retornar resultados para os Controllers

---

### Integrations

Responsáveis pela comunicação com serviços externos.

Exemplos:

* API Java
* APIs de Inteligência Artificial
* WhatsApp
* Outros serviços futuros

---

### AI

Camada responsável pela integração e processamento com modelos de Inteligência Artificial.

Responsabilidades:

* Comunicação com Gemini/OpenAI
* Engenharia de Prompt
* Estruturação de respostas
* Conversão de linguagem natural em dados financeiros

---

## 📂 Estrutura de Pastas

```text
src/
│
├── config/
│   └── Configurações da aplicação
│
├── routes/
│   └── Definição das rotas
│
├── controllers/
│   └── Controle das requisições
│
├── services/
│   └── Regras de negócio
│
├── integrations/
│   └── Comunicação com sistemas externos
│
├── ai/
│   └── Serviços de Inteligência Artificial
│
└── server.js
```

---

## 🚀 Tecnologias Utilizadas

* Node.js
* Fastify
* JavaScript (ES Modules)
* Nodemon
* Gemini API (Planejado)
* OpenAI API (Opcional)
* Docker (Planejado)

---

## 📈 Fluxo Futuro da Aplicação

```text
Usuário
   ↓
WhatsApp / Front-end
   ↓
Backend Node.js
   ↓
IA (Gemini/OpenAI)
   ↓
Dados Estruturados
   ↓
Backend Java
   ↓
Banco de Dados
```

---

## 👨‍💻 Responsável

**Ezequiel Magoga**

Responsável pelo desenvolvimento do módulo Node.js, integrações, Inteligência Artificial e comunicação entre os serviços do ecossistema FinancerAI.
