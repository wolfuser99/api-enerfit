# API

<!-- ## Description

... -->

## Deployment (Production)

```bash
docker-compose up
```

## Deployment (Development)

```bash
docker-compose -f docker-compose.dev.yml up --force-recreate # only create databases
yarn start:dev
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
