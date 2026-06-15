# 💰 FinancerAI

## 📌 Sobre o Projeto

O **FinancerAI** é uma plataforma inteligente de controle financeiro pessoal que utiliza Inteligência Artificial para transformar mensagens em registros financeiros estruturados.

O objetivo do projeto é simplificar a gestão financeira dos usuários, permitindo que receitas e despesas sejam registradas de forma natural através de mensagens de texto, eliminando a necessidade de preenchimento manual de planilhas ou sistemas complexos.

Ao receber uma mensagem como:

```text
"Gastei R$ 50 no Uber"
```

a plataforma será capaz de interpretar automaticamente:

```json
{
  "type": "expense",
  "amount": 50,
  "category": "transport"
}
```

e armazenar essas informações para geração de relatórios, dashboards e análises financeiras.

---

# 🎯 Objetivos

* Simplificar o controle financeiro pessoal.
* Automatizar o registro de receitas e despesas.
* Utilizar Inteligência Artificial para interpretação de linguagem natural.
* Fornecer dashboards e relatórios financeiros.
* Permitir futuras integrações com diferentes canais de comunicação.

---

# 🚀 Principais Funcionalidades

### 🤖 Inteligência Artificial

* Interpretação de mensagens em linguagem natural.
* Classificação automática de receitas e despesas.
* Identificação de categorias financeiras.
* Estruturação dos dados para armazenamento.

### 💬 Integração com WhatsApp

* Recebimento de mensagens diretamente pelo WhatsApp.
* Registro financeiro através de conversas naturais.

### 💰 Controle Financeiro

* Cadastro automático de receitas.
* Cadastro automático de despesas.
* Organização por categorias.
* Histórico financeiro.

### 📊 Dashboard

* Resumo financeiro.
* Visualização de receitas e despesas.
* Controle de saldo.
* Indicadores financeiros.

### 📄 Relatórios

* Relatórios mensais.
* Relatórios por categoria.
* Histórico consolidado de movimentações.

---

# 🏗️ Arquitetura Geral

O projeto é dividido em três grandes componentes:

```text
Usuário
    ↓
Frontend React
    ↓
Backend Node.js
    ↓
Inteligência Artificial
    ↓
Backend Java
    ↓
Banco de Dados
```

---

## Frontend (React)

Responsável pela interface do usuário.

Funções:

* Dashboard financeiro.
* Visualização de transações.
* Relatórios.
* Configurações da conta.

---

## Backend Node.js

Responsável pelo processamento inteligente das mensagens.

Funções:

* Receber mensagens.
* Validar dados.
* Integrar com IA.
* Converter linguagem natural em dados estruturados.
* Comunicar-se com o backend Java.

---

## Inteligência Artificial

Responsável pela interpretação das mensagens.

Exemplo:

```text
Recebi R$ 2.000 de salário
```

↓

```json
{
  "type": "income",
  "amount": 2000,
  "category": "salary"
}
```

---

## Backend Java

Responsável pela regra de negócio principal e persistência dos dados.

Funções:

* Gerenciamento de usuários.
* Autenticação.
* Controle financeiro.
* Regras de negócio.
* Comunicação com banco de dados.

---

## Banco de Dados

Responsável pelo armazenamento permanente das informações.

Dados armazenados:

* Usuários
* Transações
* Categorias
* Relatórios
* Configurações

---

# 🛠️ Tecnologias Utilizadas

## Frontend

* React
* JavaScript
* HTML5
* CSS3

## Backend Node.js

* Node.js
* Fastify
* JavaScript (ES Modules)

## Backend Java

* Java
* Spring Boot
* Spring Security
* JWT

## Banco de Dados

* PostgreSQL

## Inteligência Artificial

* Google Gemini
* OpenAI (opcional)

## DevOps

* Docker
* Git
* GitHub

---

# 📂 Estrutura do Repositório

```text
FinancerAI/
│
├── frontend-react/
│
├── backend-node/
│
├── backend-java/
│
├── docs/
│
└── README.md
```

---

# 📈 Fluxo Principal da Aplicação

```text
Usuário
    ↓
"Gastei R$ 50 no Uber"
    ↓
Node.js
    ↓
IA interpreta mensagem
    ↓
{
    type: "expense",
    amount: 50,
    category: "transport"
}
    ↓
Java
    ↓
PostgreSQL
    ↓
Dashboard atualizado
```

---

# 👥 Equipe

### Sara de Paula Souza

**Front-end & UX/UI**

Responsável pela interface do usuário, experiência de uso e dashboard financeiro.

---

### Gabriel França

**Back-end Java & Segurança**

Responsável pelas APIs principais, autenticação, regras de negócio e persistência dos dados.

---

### Ezequiel Magoga

**Node.js, Inteligência Artificial e Integrações**

Responsável pelo processamento inteligente das mensagens, integração com IA, comunicação entre sistemas e futuras integrações com WhatsApp.

---

# 🚧 Status do Projeto

**Em Desenvolvimento**

Atualmente em evolução por meio de Sprints incrementais, focando na construção de uma arquitetura escalável, modular e preparada para integrações futuras.

---

## 📜 Licença

Projeto acadêmico desenvolvido para fins de aprendizado, estudo de arquitetura de software, integração de sistemas e aplicação de Inteligência Artificial.
