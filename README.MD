# Description

- Pequena aplicação utilizando NestJs microservices. Nessa aplicação, o produtor recebe um link via GraphQL, salva no banco de dados PostgreSQL com o status 'Pending' e envia para o consumidor utilizando o tópico `microservice.correction` (consumer groupId: `microservice-consumer`). O consumidor verifica se é um link do github e retorna para o produtor um status 'Correct' ou 'Error', onde o produtor atualiza o status do mesmo no banco de dados.
- Toda a comunicação é feita via Apache Kafka.
- Para testar o GraphQl, execute a aplicação seguindo os passos abaixo e depois acesse: [http://localhost:3000/graphql](http://localhost:3000/graphql);

### Starting the app

```bash

# Docker
$ docker-compose up -d

# Starting producer
$ cd producer
$ npm i
$ npm run start:dev

# Testing producer
$ npm run test


# Starting consumer
$ cd consumer
$ npm i
$ npm run start:dev

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

## Migration

```bash
$ cd producer

# generate migration
$ npm run migration:generate

# run migration
$ npm run migration:run

```

## GRAPHQL EXAMPLE

```graphql
mutation {
  submission(
    submission: {
      repositoryUrl: "https://github.com/{{$randomFirstName}}/{{$randomLastName}}"
    }
  ) {
    id
    status
  }
}
```
