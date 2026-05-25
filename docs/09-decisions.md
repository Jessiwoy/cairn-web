# Decisoes Arquiteturais

Registre aqui decisoes importantes para evitar retrabalho e manter contexto entre sessoes.

## Formato

```text
## YYYY-MM-DD - Titulo da decisao

Estado: proposta | aceita | substituida

Contexto:

Decisao:

Consequencias:
```

## 2026-05-25 - Documentacao como fonte de verdade

Estado: aceita

Contexto:

CAIRN sera desenvolvido como flagship project fullstack, com foco em ecommerce outdoor premium plausivel.

Decisao:

Manter a pasta `docs` como fonte de verdade para produto, branding, UX, arquitetura, dados, integracao e roadmap. O agente deve consultar esses documentos antes de propor ou implementar mudancas.

Consequencias:

Novas features devem seguir a visao documentada. Mudancas relevantes de direcao devem atualizar a documentacao junto com o codigo.

## 2026-05-25 - MVP com autenticacao real, admin simplificado e checkout mockado

Estado: aceita

Contexto:

O MVP precisa demonstrar maturidade fullstack, integracao real entre frontend e backend, modelagem relacional, autenticacao completa e fluxo plausivel de ecommerce.

Decisao:

O MVP incluira login, cadastro, logout, persistencia de sessao, autenticacao JWT, rotas protegidas, area autenticada basica do usuario, integracao frontend/backend, fluxo real de ecommerce, checkout mockado e admin dashboard simplificado.

Stripe nao fara parte do MVP e sera implementado posteriormente como feature incremental premium.

Consequencias:

As features devem ser desenvolvidas por Vertical Slice Architecture. Autenticacao e admin nao serao apenas telas visuais: precisam ter backend, banco, roles/permissoes e integracao real quando a fase backend iniciar.

## 2026-05-25 - Fluxo Git com develop

Estado: aceita

Contexto:

O projeto seguira um fluxo de desenvolvimento profissional com separacao entre integracao e versao estavel.

Decisao:

Branches `feature/*` devem ser integradas em `develop`. A branch `main` deve conter somente versoes estaveis.

Consequencias:

Merges diretos de features para `main` devem ser evitados. Releases estaveis devem sair de `develop` para `main`.

## 2026-05-25 - Padroes de engenharia e Definition of Done

Estado: aceita

Contexto:

O CAIRN deve ser um projeto de portfolio tecnicamente forte, com organizacao profissional e qualidade consistente entre frontend e backend.

Decisao:

O projeto seguira Atomic Design, SOLID, DDD pragmatico, Clean Code e Vertical Slice Architecture. Tambem tera Definition of Done documentada para features, frontend, backend, integracao, visual e merges.

Consequencias:

Cada entrega deve ser avaliada por criterios objetivos de qualidade antes de mergear em `develop`. Esses padroes devem orientar a implementacao sem gerar camadas desnecessarias ou complexidade artificial.
