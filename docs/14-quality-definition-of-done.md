# Qualidade e Definition of Done

Este documento define o padrao minimo para considerar uma historia, feature ou epico como pronto.

## Definition of Done Geral

Uma entrega so deve ser considerada pronta quando:

- Atende aos criterios de aceite da historia.
- Mantem alinhamento com a visao premium outdoor retail do CAIRN.
- Segue os padroes de codigo definidos em `docs/10-project-standards.md`.
- Nao adiciona refatores sem relacao com a entrega.
- Possui nomes de arquivos, componentes, variaveis, funcoes, rotas, branches e commits em ingles.
- Mantem documentacao em portugues quando houver mudanca relevante de arquitetura, produto ou fluxo.
- Build passa sem erros.
- Nao deixa codigo morto, logs temporarios ou comentarios obvios.

## Definition of Done Frontend

Uma entrega frontend deve:

- Ser responsiva em mobile e desktop.
- Ter estados de loading, erro e vazio quando aplicavel.
- Ter estados interativos claros: hover, focus, active, disabled e loading quando necessario.
- Nao quebrar layout com textos longos.
- Usar componentes reutilizaveis quando fizer sentido.
- Separar UI, hooks, services, types e utils.
- Evitar chamada HTTP direta dentro de componente visual.
- Usar TanStack Query para server state quando houver API.
- Usar Zustand apenas para estado global de cliente quando fizer sentido.
- Seguir a direcao visual: premium outdoor retail minimalism.

## Definition of Done Backend

Uma entrega backend deve:

- Ter rotas, controllers, services, schemas e middlewares separados conforme responsabilidade.
- Validar entradas com Zod.
- Usar Prisma para acesso ao banco.
- Manter regras de negocio nos services.
- Tratar erros de forma consistente.
- Proteger rotas privadas quando aplicavel.
- Respeitar roles e permissoes quando houver acesso admin.
- Evitar expor senha, hash ou dados sensiveis em responses.

## Definition of Done de Integracao

Uma entrega integrada deve:

- Ter contrato frontend/backend claro.
- Tratar sucesso, erro, loading e estado vazio.
- Manter tipos alinhados ao contrato da API.
- Persistir dados quando a feature exigir persistencia.
- Nao depender de mock data depois que a feature tiver API real definida.

## Definition of Done Visual

Uma entrega visual deve:

- Parecer ecommerce retail real.
- Evitar concept UI, visual futurista, glassmorphism, neon e motion exagerado.
- Usar fotografia ou imagens de produto de forma dominante quando a tela pedir.
- Manter hierarquia visual clara.
- Usar spacing consistente.
- Preservar contraste e legibilidade.

## Definition of Done por Epico

Ao finalizar um epico:

- Todas as historias planejadas do epico devem estar concluidas ou explicitamente movidas para fase posterior.
- O branch do epico deve ser mergeado em `develop`.
- A documentacao deve refletir mudancas relevantes.
- O projeto deve rodar localmente.
- O build deve passar.
- O estado do repositorio deve estar claro antes de iniciar o proximo epico.

## Checklist Antes de Merge

- `npm run build` executado no frontend quando houver app configurado.
- Testes executados quando existirem.
- Review visual feito nas telas alteradas.
- Nenhum arquivo sensivel commitado.
- Commits seguem Conventional Commits.
- Branch segue o padrao `feature/*`.
- Merge feito para `develop`, nao para `main`.

