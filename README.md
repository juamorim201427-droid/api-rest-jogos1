# API REST de Jogos

API REST para cadastro e consulta de **jogos, gêneros e plataformas**, desenvolvida como projeto da disciplina de API e Banco de Dados do curso de Tecnologia em Sistemas Inteligentes (Fatec Shunji Nishimura).

## Tecnologias

- Node.js e Express 5
- TypeScript
- Prisma ORM com SQLite

## Modelo de dados

- **Gênero**: nome único; um gênero possui vários jogos
- **Plataforma**: nome único
- **Jogo**: título e gênero
- **JogoPlataforma**: relação muitos-para-muitos entre jogos e plataformas

## Rotas

| Rota | Descrição |
|---|---|
| `/generos` | Gêneros |
| `/plataformas` | Plataformas |
| `/jogos` | Jogos |
| `/jogos-plataformas` | Vínculo entre jogos e plataformas |

A pasta `html/teste.http` traz exemplos de requisições para testar a API.

## Como executar

```bash
cd api-rest-jogos-main
npm install
# crie um arquivo .env com: DATABASE_URL="file:./dev.db"
npx prisma generate
npm run dev
```

O servidor sobe em `http://localhost:8080`.

## Autora

Juliana Amorim da Silva — estudante de Tecnologia em Sistemas Inteligentes, Fatec Shunji Nishimura.
