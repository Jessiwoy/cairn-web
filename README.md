# CAIRN

CAIRN e um ecommerce outdoor premium focado em hiking, camping, trekking, bushcraft, exploracao e lifestyle outdoor moderno.

Este repositorio contem o frontend do projeto. O backend sera desenvolvido separadamente no repositorio `cairn-api`.

## Repositorios

- Frontend: `https://github.com/Jessiwoy/cairn-web`
- Backend: `https://github.com/Jessiwoy/cairn-api`

## Visao

O objetivo do CAIRN e ser um flagship project fullstack de portfolio, com foco em:

- Arquitetura frontend moderna.
- Estrutura backend escalavel em repositorio separado.
- UX/UI premium.
- Fluxos reais de ecommerce.
- Clean code.
- Organizacao profissional.
- Integracao frontend/backend.

O produto deve parecer uma marca outdoor retail real e plausivel, nao um template generico, landing page conceitual ou UI futurista sem fundamento comercial.

## Produto

CAIRN representa direcao, navegacao, exploracao, resistencia, contemplacao e confiabilidade. A marca deve comunicar uma aventura premium com visual maduro, funcional e tecnicamente plausivel.

O ecommerce deve cobrir fluxos reais de varejo:

- Descoberta de produtos.
- Catalogo com busca, filtros e ordenacao.
- Pagina de produto.
- Wishlist.
- Carrinho.
- Checkout mockado.
- Autenticacao.
- Area autenticada do usuario.
- Admin dashboard MVP.

## Stack Planejada

Frontend:

- React.
- TypeScript.
- Vite.
- TailwindCSS.
- React Router.
- Zustand.
- TanStack Query.
- Framer Motion.
- shadcn/ui.

Backend planejado no repositorio `cairn-api`:

- Node.js.
- Express.
- PostgreSQL.
- Prisma ORM.
- JWT Authentication.

## Arquitetura

O projeto segue arquitetura desacoplada:

- `cairn-web`: frontend React.
- `cairn-api`: backend REST separado.

A estrategia de desenvolvimento e Vertical Slice Architecture. Cada feature deve evoluir ponta a ponta quando aplicavel:

- UI.
- Componentes.
- Estado.
- Contratos de dados.
- API client.
- Backend endpoint.
- Banco de dados.
- Integracao.
- Testes relevantes.

## Direcao de Design

CAIRN segue premium outdoor retail minimalism, inspirado por The North Face, Patagonia, Arc'teryx e Apple retail minimalism.

A interface deve transmitir confianca, sofisticacao, durabilidade, robustez, clareza, funcionalidade e aventura premium.

Principios visuais:

- Fotografia dominante.
- Grids simples.
- Whitespace forte.
- Contraste limpo.
- Poucas informacoes por viewport.
- Motion discreto.
- Visual editorial e funcional.

## Padroes de Engenharia

O projeto segue padroes profissionais de forma pragmatica:

- Atomic Design.
- SOLID.
- DDD pragmatico.
- Clean Code.
- Conventional Commits.
- Git flow com `develop`.

## Fases

1. Frontend com mock data e experiencia retail completa.
2. Integracao com backend real, autenticacao JWT, persistencia de sessao e rotas protegidas.
3. Admin dashboard MVP com roles, permissoes e CRUD real.
4. Integracoes avancadas com Stripe, Cloudinary e deploy completo.

## Escopo do MVP

O MVP deve incluir login, cadastro, logout, persistencia de sessao, autenticacao JWT, rotas protegidas, area autenticada basica do usuario, fluxo real de ecommerce, checkout mockado e admin dashboard simplificado.

Stripe fica para uma fase posterior como feature incremental premium.

## Roadmap por Epicos

1. Fundacao do Frontend.
2. Design System e Componentes Base.
3. Catalogo e Descoberta de Produtos.
4. Pagina de Produto.
5. Carrinho e Checkout Mockado.
6. Backend Base e Autenticacao.
7. Integracao de Autenticacao no Frontend.
8. Admin Dashboard MVP.
9. Integracao de Catalogo, Carrinho e Pedidos.
10. Integracoes avancadas e deploy.

## Fluxo Git

- `main`: somente versoes estaveis.
- `develop`: branch de integracao.
- `feature/*`: desenvolvimento isolado por epico ou feature.

Merges de features devem ir para `develop`. A branch `main` deve receber apenas versoes estaveis.

## Documentacao

A pasta `docs/` e a fonte de verdade do projeto. Antes de desenvolver, leia:

- `docs/00-documentation-index.md`
- `docs/01-product-vision.md`
- `docs/02-branding.md`
- `docs/03-ux-ui-principles.md`
- `docs/04-architecture.md`

Depois consulte os documentos especificos da tarefa.

Documentos principais:

- `docs/10-project-standards.md`: padroes de codigo, Git, SOLID, DDD e Clean Code.
- `docs/12-epics.md`: epicos do projeto.
- `docs/13-mvp-backlog.md`: backlog detalhado do MVP.
- `docs/14-quality-definition-of-done.md`: Definition of Done e checklist de qualidade.

## Comandos

Os comandos serao definidos conforme a aplicacao for criada. A documentacao inicial esta em `docs/11-project-commands.md`.

## Estado Atual

Projeto em fase de arquitetura, planejamento e documentacao. O proximo passo e iniciar o Epico 1: Fundacao do Frontend.
