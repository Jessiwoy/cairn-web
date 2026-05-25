# Integracao com Backend

## Repositorio

Backend oficial:

```text
https://github.com/Jessiwoy/cairn-api.git
```

## Estrategia

O frontend deve nascer preparado para trocar mock data por API REST sem reescrever a UI.

O backend sera desenvolvido em repositorio separado. Este repositorio deve manter apenas contratos, services, tipos e integracao pelo lado frontend.

## Diretrizes

- Isolar chamadas HTTP em uma camada de API client.
- Nao espalhar `fetch` ou biblioteca HTTP diretamente por componentes.
- Tipar contratos de request/response.
- Tratar erro, loading e estados vazios no nivel da feature.
- Manter mock data com formato proximo ao contrato esperado da API.
- Usar TanStack Query para busca, cache e sincronizacao de server state.
- Manter `VITE_API_URL` como variavel de ambiente do frontend.

## Recursos REST Esperados

- `GET /products`
- `GET /products/:slug`
- `GET /categories`
- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/logout`
- `GET /me`
- `GET /cart`
- `POST /cart/items`
- `PATCH /cart/items/:id`
- `DELETE /cart/items/:id`
- `POST /checkout`
- `GET /orders`
- `GET /orders/:id`
- `GET /admin/products`
- `POST /admin/products`
- `PATCH /admin/products/:id`
- `GET /admin/orders`
- `PATCH /admin/orders/:id`

## Autenticacao

O MVP deve incluir autenticacao real com JWT e persistencia de sessao.

A UI deve prever:

- Usuario anonimo.
- Usuario autenticado.
- Login.
- Cadastro.
- Logout.
- Rotas protegidas para conta e pedidos.
- Rotas protegidas para admin.
- Persistencia de sessao ao recarregar a aplicacao.
- Recuperacao do usuario autenticado via `GET /me`.

## Roles e Permissoes

O backend deve suportar pelo menos:

- `customer`: usuario comprador.
- `admin`: usuario com acesso ao painel administrativo.

Rotas administrativas devem exigir usuario autenticado com role `admin`.

## Stack Esperada do Backend

- Node.js.
- Express.
- Prisma ORM.
- PostgreSQL.
- Zod para validacoes.
- JWT para autenticacao.

## Estrutura Esperada do Backend

```text
src/
  controllers/
  services/
  routes/
  middlewares/
  prisma/
  schemas/
  utils/
  config/
  types/
  constants/
```

## Deploy Planejado

- Backend: Render.
- Database: Neon PostgreSQL.
