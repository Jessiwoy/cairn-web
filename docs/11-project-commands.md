# Comandos do Projeto

## Frontend

Criar projeto:

```bash
npm create vite@latest
```

Instalar dependencias:

```bash
npm install
```

Rodar projeto:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Preview do build:

```bash
npm run preview
```

## TailwindCSS

Instalar:

```bash
npm install tailwindcss @tailwindcss/vite
```

## shadcn/ui

Inicializar:

```bash
npx shadcn@latest init
```

Adicionar componente:

```bash
npx shadcn@latest add button
```

## Backend

Os comandos abaixo pertencem ao repositorio separado `cairn-api`.

Inicializar projeto:

```bash
npm init -y
```

Instalar Express:

```bash
npm install express
```

Instalar TypeScript:

```bash
npm install -D typescript ts-node-dev @types/node @types/express
```

Inicializar TypeScript:

```bash
npx tsc --init
```

Instalar Prisma:

```bash
npm install prisma @prisma/client
```

Inicializar Prisma:

```bash
npx prisma init
```

Rodar migrations:

```bash
npx prisma migrate dev
```

Abrir Prisma Studio:

```bash
npx prisma studio
```

Instalar JWT e bcrypt:

```bash
npm install jsonwebtoken bcrypt
```

Instalar tipos JWT e bcrypt:

```bash
npm install -D @types/jsonwebtoken @types/bcrypt
```

## Variaveis de Ambiente

Frontend:

```env
VITE_API_URL=
```

Backend:

```env
DATABASE_URL=
JWT_SECRET=
PORT=
```

## Git

Criar branch:

```bash
git checkout -b feature/product-catalog
```

Commit convencional:

```bash
git commit -m "feat: create product grid"
```

## Deploy

- Frontend: Vercel.
- Backend: Render.
- Database: Neon PostgreSQL.

