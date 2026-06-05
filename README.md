## 🚀 FinancerAI

**FinancerAI** é uma plataforma inteligente de controle financeiro, utilizando Inteligência Artificial para automatizar o registro de receitas, despesas e geração de relatórios financeiros através do WhatsApp.

---

## 📌 Visão Geral

O FinancerAI permite que o usuário registre movimentações financeiras diretamente pelo WhatsApp utilizando linguagem natural.

### Exemplo

**Usuário envia:**

> Recebi R$500 do João pela criação de um site.

**A IA interpreta:**

```json
{
  "type": "income",
  "amount": 500,
  "description": "João",
  "category": "Serviços"
}
```

**Resultado:**

* Registro automático da movimentação
* Atualização do banco de dados
* Inclusão nos relatórios financeiros
* Disponibilização no dashboard

---

## ✨ Principais Funcionalidades

* 🤖 Integração com Inteligência Artificial (Gemini/OpenAI)
* 💬 Integração com WhatsApp
* 📊 Controle financeiro automatizado
* 💰 Registro de receitas e despesas
* 📄 Relatórios financeiros mensais
* 🔔 Lembretes de obrigações fiscais
* 👨‍💼 Integração futura com contadores
* 📈 Dashboard financeiro
* 🔐 Sistema de autenticação e autorização
* ☁️ Arquitetura preparada para escalabilidade

---

## 🏗️ Arquitetura

```text
Usuário
   ↓
WhatsApp
   ↓
IA (Gemini/OpenAI)
   ↓
Node.js (Integrações)
   ↓
Java Spring Boot (Regras de Negócio)
   ↓
PostgreSQL
   ↓
Dashboard React
```

---

## 🛠️ Tecnologias

### Back-end

* Node.js
* Fastify
* Java
* Spring Boot
* Spring Framework
* JPA
* JWT

### Banco de Dados

* PostgreSQL
* Prisma ORM

### Front-end

* React
* Figma

### Integrações

* Baileys (WhatsApp)
* Gemini API
* OpenAI API

### DevOps

* Docker
* Git
* GitHub

---

## 📂 Estrutura do Projeto

```text
financer-ai/
│
├── frontend/
│   └── React
│
├── backend-node/
│   └── Integrações IA e WhatsApp
│
├── backend-java/
│   └── Regras de negócio
│
├── database/
│   └── PostgreSQL
│
├── docs/
│   └── Documentação do projeto
│
└── docker/
```

---

## 👥 Equipe

### Ezequiel Magoga

* Integração com IA
* Integração WhatsApp
* PostgreSQL
* APIs Node.js
* Modelagem de Banco de Dados
* Integração entre Serviços
* Gestão do GitHub

### Gabriel Martinelli

* Back-end Java
* Spring Boot
* Autenticação JWT
* Regras de Negócio
* Segurança
* Testes

### Sara de Paula Souza

* React
* Dashboard
* UX/UI
* Responsividade
* Integração Front-end
* Deploy

---

## 🗺️ Roadmap

### Sprint 01 — Fundação

* Estrutura dos projetos
* Configuração dos ambientes
* Banco de dados
* Configuração da IA
* Documentação

### Sprint 02 — MVP Financeiro

* Cadastro de usuários
* Login
* Autenticação JWT
* Registro de transações
* Integração IA → Banco

### Sprint 03 — WhatsApp

* Integração Baileys
* Recebimento de mensagens
* Interpretação via IA
* Salvamento automático

### Sprint 04+

* Dashboard avançado
* Relatórios completos
* Integração com contadores
* Notificações fiscais
* Escalabilidade

---

## 📊 Status do Projeto

🚧 **Em Desenvolvimento**

**Sprint Atual:** Sprint 01 — Fundação do Projeto

---

## 🎯 Missão

Transformar o controle financeira através da Inteligência Artificial, tornando processos financeiros complexos tão simples quanto enviar uma mensagem no WhatsApp.
