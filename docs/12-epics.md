# Epicos

Este documento organiza o desenvolvimento futuro por epicos. Cada epico deve ser executado como vertical slice quando fizer sentido, conectando UI, estado, dados, contratos e integracao.

## Epico 1: Fundacao do Frontend

Objetivo: criar a base tecnica do `cairn-web`.

Estado atual: concluido na Fase 1.

Inclui:

- Vite, React e TypeScript.
- TailwindCSS.
- shadcn/ui.
- Estrutura oficial de pastas.
- Rotas iniciais.
- Tokens visuais.
- Layout base.
- Configuracao de lint, formatacao e scripts.

## Epico 2: Design System e Componentes Base

Objetivo: implementar a base visual reutilizavel do ecommerce.

Estado atual: base inicial concluida; novos componentes devem evoluir conforme as features.

Inclui:

- Atoms.
- Molecules.
- Organisms iniciais.
- Tipografia.
- Botoes, inputs, badges, precos e estados.
- Header, footer e navegacao.
- Estados de loading, erro e vazio.

## Epico 3: Catalogo e Descoberta de Produtos

Objetivo: permitir descoberta e comparacao de produtos com mock data.

Estado atual: concluido em mock data, incluindo home, catalogo, filtros, ordenacao, busca e product cards.

Inclui:

- Home retail.
- Listagem de produtos.
- Categorias.
- Busca.
- Filtros.
- Ordenacao.
- Product cards.
- Collections ou secoes editoriais.

## Epico 4: Pagina de Produto

Objetivo: criar experiencia de decisao de compra.

Estado atual: parcialmente concluido. A pagina de produto tem galeria, informacoes tecnicas, variantes, preco, estoque, CTA de carrinho e wishlist local. Reviews detalhadas permanecem pendentes.

Inclui:

- Galeria de produto.
- Informacoes tecnicas.
- Variantes.
- Preco.
- Estoque.
- CTA de carrinho.
- Wishlist.
- Reviews em mock data.

## Epico 5: Carrinho e Checkout Mockado

Objetivo: simular o fluxo comercial de checkout sem gateway de pagamento real.

Estado atual: concluido em mock data local. O carrinho usa Zustand com persistencia em `localStorage`; o checkout gera confirmacao simulada e limpa o carrinho.

Inclui:

- Cart drawer ou pagina de carrinho.
- Quantidade.
- Remocao de itens.
- Resumo de compra.
- Checkout visual.
- Endereco mockado.
- Confirmacao de pedido mockada.
- Criacao de pedido mockada ou integrada ao backend, sem Stripe.

## Epico 6: Autenticacao, Sessao e Conta

Objetivo: implementar autenticacao completa com backend, persistencia de sessao e area autenticada basica.

Estado atual: pendente. Existem rotas placeholder de login, cadastro e conta, sem formularios reais ou integracao.

Inclui:

- Login.
- Cadastro.
- Logout.
- JWT.
- Persistencia de sessao.
- Recuperacao do usuario autenticado.
- Rotas protegidas.
- Conta do usuario.
- Pedidos.
- Wishlist.
- Estados autenticado e anonimo.

## Epico 7: Admin Dashboard MVP

Objetivo: demonstrar controle administrativo, roles, permissoes e CRUD real.

Estado atual: pendente. Existe rota placeholder de admin.

Inclui:

- Dashboard basico.
- Rotas protegidas admin.
- Role `admin`.
- Listagem de produtos.
- Criacao de produtos.
- Edicao de produtos.
- Gerenciamento simples de pedidos.

Fora do MVP:

- Analytics.
- Upload avancado de imagens.
- Metricas.
- Gestao avancada de estoque.
- Relatorios.

## Epico 8: Integracao com Backend

Objetivo: substituir mock data por API REST do `cairn-api`.

Inclui:

- Services HTTP.
- TanStack Query.
- Autenticacao real.
- Catalogo real.
- Carrinho persistente.
- Pedidos reais.
- Tratamento de erros.

## Epico 9: Integracoes Avancadas e Deploy

Objetivo: preparar o projeto para apresentacao final de portfolio.

Inclui:

- Stripe sandbox.
- Cloudinary.
- Deploy frontend na Vercel.
- Integracao com backend no Render.
- Banco Neon PostgreSQL.
- Documentacao final.
