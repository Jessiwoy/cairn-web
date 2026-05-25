# Arquitetura

## Estrategia Geral

CAIRN sera desenvolvido com arquitetura desacoplada:

- `cairn-web`: frontend React.
- `cairn-api`: backend REST separado.

Stack planejada:

- Frontend: React, TypeScript, Vite, TailwindCSS, React Router, Zustand, TanStack Query, Framer Motion e shadcn/ui.
- Backend: Node.js, Express, Prisma ORM e PostgreSQL.
- Validacoes: Zod.
- Formularios no frontend: React Hook Form e Zod.
- Autenticacao no backend: JWT.
- Deploy frontend: Vercel.
- Deploy backend: Render.
- Banco remoto: Neon PostgreSQL.

## Abordagem de Desenvolvimento

Usar Vertical Slice Architecture sempre que possivel. Cada feature deve evoluir ponta a ponta:

- UI
- Componentes
- Estado
- API client
- Backend endpoint
- Banco de dados
- Integracao
- Testes relevantes

## Escopo do MVP

O MVP deve demonstrar um fluxo real de ecommerce com frontend integrado ao backend, autenticacao completa, modelagem relacional e area autenticada basica.

Inclui:

- Login.
- Cadastro.
- Logout.
- Persistencia de sessao.
- Autenticacao JWT.
- Rotas protegidas.
- Area autenticada basica do usuario.
- Integracao frontend/backend.
- Modelagem de usuarios.
- Fluxo comercial com catalogo, carrinho e checkout mockado.
- Admin dashboard simplificado.

O checkout sera inicialmente mockado, sem integracao real com gateway de pagamento. Stripe fica para uma fase posterior como feature incremental premium.

## Admin Dashboard MVP

O admin dashboard faz parte do portfolio inicial em versao simplificada.

Objetivo:

- Demonstrar controle administrativo.
- Demonstrar roles e permissoes.
- Demonstrar CRUD real.
- Demonstrar organizacao arquitetural.
- Demonstrar rotas protegidas admin.

Escopo inicial:

- Dashboard basico.
- Listagem de produtos.
- Criacao de produtos.
- Edicao de produtos.
- Gerenciamento simples de pedidos.

Ficam para fases posteriores:

- Analytics.
- Upload avancado de imagens.
- Metricas.
- Gestao avancada de estoque.
- Relatorios.

## Fases

### Fase 1: Frontend com mock data

Objetivo:

- Acelerar UX.
- Definir linguagem visual.
- Criar componentes centrais.
- Simular jornadas reais de ecommerce.

### Fase 2: Backend real

Objetivo:

- Substituir mocks por API REST.
- Implementar modelagem relacional.
- Criar autenticacao JWT completa.
- Implementar persistencia de sessao no frontend.
- Implementar rotas protegidas.
- Persistir carrinho, pedidos, usuarios e catalogo.
- Implementar roles e permissoes para admin.

### Fase 3: Integracoes avancadas

Objetivo:

- Stripe.
- Cloudinary.
- Deploy completo.
- Observabilidade basica.

## Backend Separado

Este repositorio nao deve conter a implementacao do backend. O backend sera desenvolvido no repositorio `cairn-api`, mantendo separacao clara entre frontend e API.

## Qualidade Esperada

O projeto deve demonstrar:

- Arquitetura desacoplada.
- Frontend moderno.
- Backend estruturado.
- Modelagem relacional.
- Autenticacao.
- Gerenciamento de estado.
- Componentizacao.
- Clean code.
- UX/UI premium.
- Escalabilidade.
- Integracao frontend/backend.
- Organizacao profissional.

## Regra de Decisao

Quando houver conflito entre velocidade e arquitetura, priorize uma implementacao simples, clara e extensivel. Evite tanto overengineering quanto atalhos que prejudiquem a evolucao fullstack.
