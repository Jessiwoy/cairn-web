# Frontend

## Objetivo

Construir uma aplicacao React desacoplada, moderna e profissional, com foco em ecommerce retail real.

## Stack Oficial

- React.
- TypeScript.
- Vite.
- TailwindCSS.
- React Router.
- Zustand.
- TanStack Query.
- Framer Motion.
- shadcn/ui.

## Diretrizes

- Organizar codigo por features quando o projeto crescer.
- Manter componentes de UI reutilizaveis separados de logica de dominio.
- Centralizar mock data e contratos de dados.
- Criar estados de UI consistentes: loading, error, empty e success.
- Evitar componentes grandes demais sem necessidade.
- Preferir nomes de dominio claros em ingles: product, cart, checkout, account, order.

## Estrutura Oficial

```text
src/
  assets/
  components/
    atoms/
    molecules/
    organisms/
    templates/
    ui/
    shared/
    features/
  layouts/
  pages/
  routes/
  hooks/
  services/
  store/
  contexts/
  types/
  utils/
  styles/
  lib/
  constants/
  data/
  config/
```

## Atomic Design

O projeto seguira Atomic Design Methodology:

- Atoms: componentes minimos reutilizaveis, como `Button`, `Input`, `Badge`, `Icon` e `Typography`.
- Molecules: combinacoes pequenas, como `SearchBar`, `ProductPrice`, `QuantitySelector` e `ProductBadge`.
- Organisms: blocos maiores, como `Header`, `ProductGrid`, `CartDrawer` e `ProductGallery`.
- Templates: estruturas reutilizaveis de paginas, como `ProductTemplate`, `CheckoutTemplate` e `AccountTemplate`.
- Pages: paginas finais, como `HomePage`, `CatalogPage`, `ProductPage` e `CheckoutPage`.

## Regras de UI

- A primeira tela deve parecer ecommerce, nao landing page generica.
- Use imagens reais ou plausiveis de produto/outdoor quando necessario.
- Header, navegacao e descoberta de produto sao partes centrais.
- Evite efeitos visuais que dificultem leitura, performance ou manutencao.

## Estado

Comecar simples, mas seguindo as responsabilidades oficiais:

- Zustand: `cart state`, `auth state` e `UI state`.
- TanStack Query: `server state`, cache e sincronizacao com API.

## Contratos

Mesmo na fase de mock data, modele dados pensando na futura API. Evite estruturas improvisadas que precisem ser descartadas.

## Services

Toda comunicacao HTTP deve ficar em `services/`. Componentes nao devem chamar `fetch` diretamente.

## Estilizacao

TailwindCSS sera a estrategia principal. O projeto deve usar tokens visuais para cores, spacing, tipografia, sombras e radius.
