# Companies Portal

Simple application that lists companies that added before and an add/edit companies with a simple form.

# Application Structure

Monorepo managed by Lerna and yarn workspaces containing app client (ReactJS), app server (NestJS). Using Prisma for quering the database.

# Online Demo

[Companies-Portal](https://omarelmassri.github.io/companies-portal/)

Application Front-End hosted on github pages and Back-End/Database hosted on heroku.

# Usage

## Using Docker

first you need to build the docker file

```bash
docker build -t company-portal:latest .
```

then run the images (in detached mode)

```bash
docker-compose up -d
```

## Normal Run

first install the dependencies

```bash
yarn install
```

run the app locally

```bash
yarn start
```

# Seeding

In order to use the application properly you have to seed the lookup tables into the database industry types, countries and cities.

from the root directory of the project

```bash
yarn install

cd packages/companies-server

yarn seed
```
