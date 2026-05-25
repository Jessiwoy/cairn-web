# Backlog do MVP

Este backlog traduz os epicos em historias e entregas executaveis. O desenvolvimento deve seguir Vertical Slice Architecture: cada feature deve entregar a parte de UI, estado, contrato, backend, banco e integracao quando aplicavel.

## Regras do MVP

- O MVP deve demonstrar fluxo real de ecommerce.
- Autenticacao deve ser real, com JWT e persistencia de sessao.
- Checkout deve ser mockado, sem Stripe.
- Admin dashboard entra no MVP em versao simplificada.
- Stripe, Cloudinary avancado, analytics, relatorios e metricas ficam para fases posteriores.
- Este repositorio contem o frontend. Backlog backend deve ser executado no repositorio `cairn-api`.

## Ordem Recomendada

1. Fundacao do Frontend.
2. Design System e Componentes Base.
3. Catalogo e Descoberta de Produtos.
4. Pagina de Produto.
5. Carrinho e Checkout Mockado.
6. Backend Base e Autenticacao.
7. Integracao de Autenticacao no Frontend.
8. Admin Dashboard MVP.
9. Integracao de Catalogo, Carrinho e Pedidos.

## Epico 1: Fundacao do Frontend

### Historia 1.1: Inicializar aplicacao

Como desenvolvedora, quero iniciar o `cairn-web` com React, TypeScript e Vite para ter uma base moderna e simples de evoluir.

Criterios de aceite:

- App React com TypeScript criado.
- Scripts `dev`, `build` e `preview` funcionando.
- Estrutura oficial de pastas criada.
- Projeto roda localmente sem erros.

### Historia 1.2: Configurar stack visual

Como desenvolvedora, quero configurar TailwindCSS e shadcn/ui para construir uma UI consistente e produtiva.

Criterios de aceite:

- TailwindCSS configurado.
- shadcn/ui inicializado.
- Estilos globais criados.
- Tokens iniciais de cor, tipografia, spacing, radius e sombra definidos.

### Historia 1.3: Configurar roteamento

Como usuaria, quero navegar entre paginas principais para acessar o fluxo do ecommerce.

Criterios de aceite:

- React Router configurado.
- Rotas iniciais criadas: home, catalogo, produto, carrinho, checkout, login, cadastro, conta e admin.
- Layout publico e layout autenticado preparados.
- Pagina 404 simples criada.

## Epico 2: Design System e Componentes Base

### Historia 2.1: Criar atoms

Como desenvolvedora, quero componentes basicos reutilizaveis para manter consistencia visual.

Criterios de aceite:

- `Button`, `Input`, `Badge`, `Icon`, `Typography` e `Container` criados.
- Componentes seguem Atomic Design.
- Estados de hover, focus, disabled e loading tratados quando aplicavel.

### Historia 2.2: Criar molecules comerciais

Como usuaria, quero informacoes comerciais legiveis para comparar produtos rapidamente.

Criterios de aceite:

- `SearchBar`, `ProductPrice`, `QuantitySelector`, `ProductBadge` e `RatingSummary` criados.
- Componentes aceitam props tipadas.
- Componentes nao dependem diretamente de mock data.

### Historia 2.3: Criar organismos globais

Como usuaria, quero uma navegacao clara e confiavel para explorar a loja.

Criterios de aceite:

- `Header` criado com logo, categorias, busca, conta, wishlist e carrinho.
- `Footer` criado.
- Header sticky com visual preto predominante.
- Layout responsivo para desktop e mobile.

## Epico 3: Catalogo e Descoberta de Produtos

### Historia 3.1: Criar mock data de catalogo

Como desenvolvedora, quero produtos mockados realistas para construir a experiencia antes da API.

Criterios de aceite:

- Produtos com categorias, variantes, imagens, precos, tags e atributos tecnicos.
- Dados modelados pensando no contrato futuro da API.
- Sem lorem ipsum em areas importantes.

### Historia 3.2: Criar home retail

Como cliente, quero uma home que pareca uma loja outdoor premium real.

Criterios de aceite:

- Hero com fotografia dominante.
- Secoes de produtos ou colecoes.
- CTAs discretos.
- Layout nao parece landing page SaaS.

### Historia 3.3: Criar catalogo com filtros

Como cliente, quero filtrar e ordenar produtos para encontrar itens relevantes.

Criterios de aceite:

- Listagem de produtos criada.
- Filtros por categoria, preco, atributos e disponibilidade.
- Ordenacao basica.
- Estado vazio quando nenhum produto corresponde aos filtros.

## Epico 4: Pagina de Produto

### Historia 4.1: Criar pagina de produto

Como cliente, quero avaliar um produto em detalhe antes de comprar.

Criterios de aceite:

- Galeria de imagens.
- Nome, preco, descricao e detalhes tecnicos.
- Variantes quando aplicavel.
- Estado de estoque.
- CTA para adicionar ao carrinho.

### Historia 4.2: Criar wishlist no produto

Como cliente, quero salvar produtos de interesse para voltar depois.

Criterios de aceite:

- Acao de adicionar/remover da wishlist.
- Feedback visual da acao.
- Estado persistido localmente na fase mock.

## Epico 5: Carrinho e Checkout Mockado

### Historia 5.1: Criar carrinho

Como cliente, quero revisar produtos antes de finalizar a compra.

Criterios de aceite:

- Adicionar produto ao carrinho.
- Alterar quantidade.
- Remover item.
- Calcular subtotal e total mockado.
- Persistir carrinho localmente na fase mock.

### Historia 5.2: Criar checkout mockado

Como cliente, quero passar por um checkout plausivel mesmo sem gateway real.

Criterios de aceite:

- Formulario de dados de entrega.
- Resumo do pedido.
- Confirmacao de pedido mockada.
- Nenhuma integracao com Stripe.

## Epico 6: Backend Base e Autenticacao

Este epico sera implementado no repositorio `cairn-api`, mas define o contrato esperado pelo frontend.

### Historia 6.1: Criar base da API

Como desenvolvedora, quero uma API Express com TypeScript para integrar o frontend.

Criterios de aceite:

- Express com TypeScript configurado.
- Prisma configurado.
- PostgreSQL configurado.
- Estrutura de controllers, services, routes, middlewares e schemas criada.

### Historia 6.2: Implementar usuarios e auth

Como cliente, quero criar conta e acessar minha sessao com seguranca.

Criterios de aceite:

- Modelo `User` com role.
- Cadastro.
- Login.
- Logout.
- JWT.
- Hash de senha.
- Endpoint `GET /me`.
- Validacoes com Zod.

## Epico 7: Integracao de Autenticacao no Frontend

### Historia 7.1: Criar telas de login e cadastro

Como cliente, quero entrar ou criar conta para acessar minha area autenticada.

Criterios de aceite:

- Tela de login.
- Tela de cadastro.
- Validacao de formulario.
- Feedback de erro e sucesso.
- Integracao com API.

### Historia 7.2: Persistir sessao

Como cliente autenticado, quero continuar logado ao recarregar a aplicacao.

Criterios de aceite:

- Token ou sessao persistida conforme decisao de seguranca.
- `GET /me` executado ao iniciar app.
- Logout limpa estado local.
- Rotas protegidas redirecionam usuario anonimo.

## Epico 8: Admin Dashboard MVP

### Historia 8.1: Proteger area admin

Como admin, quero acessar uma area restrita para gerenciar a loja.

Criterios de aceite:

- Rota admin protegida.
- Acesso permitido apenas para role `admin`.
- Usuario sem permissao recebe feedback ou redirecionamento.

### Historia 8.2: Gerenciar produtos

Como admin, quero listar, criar e editar produtos para manter o catalogo.

Criterios de aceite:

- Listagem de produtos.
- Formulario de criacao.
- Formulario de edicao.
- Validacoes basicas.
- Integracao com API.

### Historia 8.3: Gerenciar pedidos de forma simples

Como admin, quero visualizar pedidos e atualizar status simples.

Criterios de aceite:

- Listagem de pedidos.
- Detalhe ou resumo do pedido.
- Atualizacao simples de status.
- Rota protegida por admin.

## Epico 9: Integracao de Catalogo, Carrinho e Pedidos

### Historia 9.1: Integrar catalogo real

Como cliente, quero ver produtos reais vindos da API.

Criterios de aceite:

- `GET /products` integrado.
- `GET /products/:slug` integrado.
- Loading, error e empty states.
- Cache com TanStack Query.

### Historia 9.2: Integrar carrinho persistente

Como cliente autenticado, quero manter meu carrinho entre sessoes.

Criterios de aceite:

- Carrinho sincronizado com API.
- Adicionar, atualizar e remover itens.
- Tratamento de erros.

### Historia 9.3: Criar pedido sem Stripe

Como cliente, quero finalizar um pedido mockado para completar o fluxo do ecommerce.

Criterios de aceite:

- Checkout cria pedido no backend.
- Pedido aparece na area do usuario.
- Pagamento permanece mockado.
- Nenhuma chamada para gateway real.
