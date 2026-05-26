# Roadmap

## Fase 0: Fundacao

- Definir docs do projeto.
- Definir stack frontend.
- Criar estrutura inicial do app.
- Configurar lint, formatacao e scripts.
- Configurar TailwindCSS.
- Inicializar shadcn/ui.
- Definir tokens visuais.

## Fase 1: Retail Frontend com Mock Data

- Home com comportamento de ecommerce real.
- Catalogo de produtos.
- Filtros e ordenacao.
- Pagina de produto.
- Carrinho.
- Checkout visual.
- Login/cadastro visual.
- Conta e pedidos com mock data.
- Wishlist.
- Admin dashboard visual simplificado.

## Fase 2: Backend REST

- Criar API separada.
- Modelar banco relacional.
- Implementar catalogo.
- Implementar autenticacao JWT completa.
- Implementar login, cadastro e logout.
- Implementar persistencia de sessao.
- Implementar rotas protegidas.
- Implementar roles e permissoes.
- Implementar carrinho persistente.
- Implementar pedidos.
- Implementar CRUD administrativo de produtos.
- Implementar gerenciamento simples de pedidos no admin.
- Integrar frontend com backend.

## Fase 3: Experiencia Premium

- Refinar microinteracoes.
- Melhorar imagens e conteudo.
- Adicionar wishlist.
- Adicionar reviews.
- Melhorar busca.
- Criar estados de erro e empty states robustos.

## Fase 4: Integracoes e Deploy

- Stripe sandbox.
- Cloudinary.
- Deploy frontend.
- Deploy backend.
- Banco em ambiente remoto.
- Documentacao final do portfolio.

## MVP

O MVP inclui autenticacao completa, integracao frontend/backend, modelagem de usuarios, rotas protegidas, persistencia de sessao, fluxo real de ecommerce, checkout mockado e admin dashboard simplificado.

Stripe nao faz parte do MVP.

## Estado Atual

Projeto em Fase 1, com o frontend retail em mock data avancado.

Concluido no `cairn-web`:

- Fundacao React, TypeScript, Vite, TailwindCSS e rotas principais.
- Design system inicial com atoms, molecules, header, footer e estados vazios.
- Home retail, catalogo, filtros, ordenacao e busca por query.
- Pagina de produto com galeria mockada, variantes, preco, estoque e CTA de carrinho.
- Carrinho local persistido com Zustand e `localStorage`.
- Wishlist local persistida com Zustand e `localStorage`.
- Checkout mockado com dados de contato, entrega, resumo e confirmacao simulada.
- Login/cadastro visual com formularios e validacao HTML nativa.
- Conta do usuario com perfil, endereco e historico de pedidos em mock data.

Ainda pendente na Fase 1:

- Admin dashboard visual simplificado.
- Refinamento de assets reais, incluindo hero com video/imagem de campanha.

Proximo passo recomendado:

Avancar para admin dashboard visual simplificado ou refinamento de assets da home, antes de iniciar o repositorio `cairn-api`.
