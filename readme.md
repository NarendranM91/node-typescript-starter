# TypeScript node starter

Purpose of this template is to get started in minutes with nodejs and typscript and all the workflow already setup

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/79c6664b36394790a5317e9b1ec12a17)](https://www.codacy.com/gh/dhruvsaxena1998/node-express-typescript/dashboard?utm_source=github.com&utm_medium=referral&utm_content=dhruvsaxena1998/node-express-typescript&utm_campaign=Badge_Grade)

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## Features

- 100% written in typescript
- Follows service-controller design pattern
- Supported database - `Postgres` with knex query builder
- Authentication and Authorization pre-setup
- Middlewares
  - Authorization (Role based)
  - Ratelimiter
  - Joi Validator
  - Pino Logger
  - ErrorHandler
- Redis / Memory cache supported
- Swagger documentation
- Testing with jest and supertest
- Eslint and prettier linting
- And minor common utils npm packages `lodash`

All pre-configured or very minimum configuration required\*

## Pre-reqs

To build and run this app locally you will need a few things:

- Envirnoment - [Nodejs](https://nodejs.org/en/download/)
- Editor - [VS Code](https://code.visualstudio.com/download)
- Database - [Postgresql](https://www.postgresql.org/download/) | [MySQL](https://www.mysql.com/downloads/) `[wip]`

## Getting started

- Clone the repository

```bash
git clone https://github.com/dhruvsaxena1998/node-express-typescript.git --branch <branch-name> <project-name>
```

- Install dependencies

```bash
cd <project-name>
```

```bash
# yarn is recommended
# install yarn if not already installed
npm i -g yarn@latest
```

```bash
yarn install
```

- Configure your database

Create `.env` file by replicating `.env.example` and fill as per needs.

To properly run this project, you will need to setup following variables to your `.env` file.

`JWT_SECRET` -> Important\*

> Secret from which your `jwt tokens` will be signed and verified.

```bash
# you can use this command in cli to easily generate random base64 string
# and use it as secret string or you can use any secret-string as per your wish.
node -e "console.log(require('crypto').randomBytes(64).toString('base64'))"
```

| key              | default value |
| ---------------- | ------------- |
| DB_XXXX_HOST     | `localhost`   |
| DB_XXXX_PORT     | `5432`        |
| DB_XXXX_DATABASE | `template`    |
| DB_XXXX_USER     | `admin`       |
| DB_XXXX_PASS     | `root`        |

> Change `XXXX` with either one of these [`DEV`, `TEST`, `PROD`].
> Depending on your environment.

- Run pre-reqs scripts

```bash
# migrate base tables
yarn knex:migrate

# seed database with genesis block
yarn knex:seed
```

## Run Locally

- Start the server

```bash
# start application with development environment
yarn start:dev

# you can use legacy if above command doesn't seems to work
# yarn start:dev-legacy
```

- Tests

```bash
# unit testing with jest and supertest
yarn test:unit
```

- Linting

```bash
# lint check
yarn lint

# lint fix
yarn lint --fix
```

## Authors

- [@dhruvsaxena1998](https://www.github.com/dhruvsaxena1998)
