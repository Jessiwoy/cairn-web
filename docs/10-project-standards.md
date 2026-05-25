# Padroes do Projeto

## Filosofia de Codigo

O projeto deve priorizar:

- Legibilidade.
- Escalabilidade.
- Separacao de responsabilidades.
- Componentizacao.
- Reutilizacao.
- Baixo acoplamento.
- Consistencia visual e arquitetural.

## Principios de Engenharia

O projeto deve aplicar padroes profissionais de engenharia de forma pragmatica:

- Atomic Design para organizacao visual e componentizacao no frontend.
- SOLID para orientar responsabilidades, extensibilidade e baixo acoplamento.
- DDD pragmatico para nomear dominios, entidades, contratos e casos de uso.
- Clean Code para manter codigo legivel, coeso e simples de evoluir.
- Vertical Slice Architecture para entregar features ponta a ponta.

Esses padroes devem orientar decisoes reais, mas nao devem gerar overengineering. O objetivo e clareza, evolucao segura e demonstracao profissional.

## SOLID

- Single Responsibility: componentes, hooks, services e utils devem ter uma responsabilidade clara.
- Open/Closed: extensoes devem evitar alteracoes grandes em codigo estavel quando uma composicao simples resolver.
- Liskov Substitution: tipos e contratos devem manter comportamento previsivel ao serem substituidos.
- Interface Segregation: props, tipos e contratos devem ser pequenos e especificos.
- Dependency Inversion: features devem depender de contratos e services, nao de detalhes espalhados de implementacao.

## DDD Pragmatico

O projeto deve usar linguagem de dominio consistente:

- Product.
- Category.
- ProductVariant.
- Cart.
- CartItem.
- Wishlist.
- Order.
- OrderItem.
- User.
- Admin.

Regras:

- Nomes de tipos e services devem refletir o dominio.
- Logica de negocio nao deve ficar escondida em componentes visuais.
- Contratos de API e mock data devem se aproximar da modelagem real.
- Use DDD como ferramenta de clareza, nao como desculpa para criar camadas desnecessarias.

## Clean Code

- Prefira funcoes pequenas e nomes explicitos.
- Evite duplicacao relevante.
- Evite componentes grandes com muitas responsabilidades.
- Evite booleanos confusos em excesso; prefira estados claros quando necessario.
- Trate estados de erro, loading e vazio de forma consistente.
- Remova codigo morto durante a implementacao.

## Idioma do Projeto

A documentacao deve ser escrita em portugues.

O codigo deve ser escrito em ingles, incluindo:

- Variaveis.
- Funcoes.
- Componentes.
- Rotas.
- Commits.
- Branches.
- Arquivos.

## Comentarios

Comentarios devem ser objetivos, necessarios e tecnicos.

Evitar:

- Comentarios redundantes.
- Comentarios obvios.
- Excesso de comentarios.

## Convencoes de Nomenclatura

- Componentes: PascalCase. Exemplos: `ProductCard.tsx`, `CartDrawer.tsx`, `CheckoutSummary.tsx`.
- Hooks: camelCase iniciado com `use`. Exemplos: `useCart.ts`, `useAuth.ts`, `useProducts.ts`.
- Utils: camelCase. Exemplos: `formatPrice.ts`, `generateSlug.ts`.
- Constantes: UPPER_CASE. Exemplos: `MAX_CART_ITEMS`, `DEFAULT_PAGE_SIZE`.
- Types: PascalCase. Exemplos: `Product`, `CartItem`, `ProductVariant`.

## Separacao de Responsabilidades

- UI: responsavel apenas por renderizacao.
- Hooks: responsaveis por logica reutilizavel.
- Services: responsaveis por comunicacao HTTP.
- Utils: responsaveis por funcoes puras.

## Estado

- Zustand: carrinho, autenticacao e estado global de UI.
- TanStack Query: server state, cache e sincronizacao com API.

## Formularios e Validacoes

- Frontend: React Hook Form e Zod.
- Backend: Zod.

## Estilizacao

- TailwindCSS como estrategia principal.
- Visual inspirado em premium outdoor retail minimalism.
- Usar tokens de cores, spacing, tipografia, sombras e radius.

## Motion

Animacoes devem ser discretas, rapidas e funcionais.

Evitar:

- Excesso de motion.
- Animacoes longas.
- Animacoes decorativas.

## Git Strategy

- `main`: producao estavel.
- `develop`: integracao geral.
- `feature/*`: features isoladas.

Fluxo oficial:

- O desenvolvimento deve ocorrer em branches `feature/*`.
- Merges de features devem ser feitos em `develop`.
- `main` deve receber apenas versoes estaveis.
- Evite merge direto de `feature/*` para `main`.

Exemplos:

```text
feature/product-catalog
feature/authentication
feature/cart-system
feature/frontend-foundation
feature/design-system
feature/product-page
feature/mock-checkout
feature/admin-dashboard
```

## Branch Naming por Epico

- Epico 1: `feature/frontend-foundation`
- Epico 2: `feature/design-system`
- Epico 3: `feature/product-catalog`
- Epico 4: `feature/product-page`
- Epico 5: `feature/mock-checkout`
- Epico 6: `feature/authentication`
- Epico 7: `feature/admin-dashboard`
- Epico 8: `feature/backend-integration`
- Epico 9: `feature/advanced-integrations`

## Commits

Usar Conventional Commits.

Exemplos:

```text
feat: create product grid
fix: resolve auth middleware issue
refactor: improve cart persistence
docs: update architecture documentation
```

Tipos recomendados:

- `feat`: nova funcionalidade.
- `fix`: correcao de bug.
- `refactor`: melhoria interna sem mudar comportamento.
- `docs`: documentacao.
- `style`: formatacao ou ajuste visual sem mudanca de logica.
- `test`: testes.
- `chore`: tarefas de manutencao.
