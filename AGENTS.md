# Instrucoes para Agentes no CAIRN

Antes de responder prompts de implementacao ou alterar codigo neste repositorio, leia o contexto do projeto em `docs/`.

## Verificacao Obrigatoria de Contexto

Sempre revise estes arquivos antes de planejar ou desenvolver:

1. `docs/00-documentation-index.md`
2. `docs/01-product-vision.md`
3. `docs/02-branding.md`
4. `docs/03-ux-ui-principles.md`
5. `docs/04-architecture.md`

Depois leia os documentos especificos que se aplicam ao trabalho:

- Trabalho de frontend: `docs/05-frontend.md`
- Dados ou mock data: `docs/06-data-strategy.md`
- Integracao com API/backend: `docs/07-backend-integration.md`
- Roadmap ou sequenciamento: `docs/08-roadmap.md`
- Historico de decisoes arquiteturais: `docs/09-decisions.md`
- Padroes de codigo, Git e organizacao: `docs/10-project-standards.md`
- Comandos do projeto: `docs/11-project-commands.md`
- Desenvolvimento por epicos: `docs/12-epics.md`
- Backlog do MVP: `docs/13-mvp-backlog.md`
- Qualidade e Definition of Done: `docs/14-quality-definition-of-done.md`

## Norte do Projeto

CAIRN e um ecommerce outdoor premium e o flagship project do portfolio. Ele deve parecer uma marca retail real e plausivel, nao um template ecommerce generico, landing page de startup, UI conceitual futurista ou mockup feito apenas para portfolio.

## Principios de Desenvolvimento

- Prefira vertical slices: UI, estado, dados, contrato de API e integracao devem evoluir juntos quando aplicavel.
- Preserve o posicionamento outdoor retail premium nas decisoes de copy, layout e componentes.
- Use mock data na fase 1, mas modele os dados como se viessem do backend futuro.
- Mantenha a arquitetura simples, tipada, manutenivel e preparada para uma API REST separada.
- Evite refatores sem relacao com a tarefa.
- Atualize `docs/09-decisions.md` ao tomar decisoes relevantes de arquitetura ou direcao de produto.

## Disciplina de Resposta

Ao responder ao usuario:

- Informe quais documentos foram considerados quando a tarefa envolver implementacao.
- Aponte qualquer proposta que entre em conflito com a direcao documentada do CAIRN.
- Prefira passos concretos de implementacao em vez de brainstorming abstrato, exceto quando o usuario pedir brainstorming explicitamente.
