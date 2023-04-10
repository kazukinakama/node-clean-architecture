# node-clean-architecture

## Start the docker containers

```sh
docker compose up -d
```

## Stop the docker containers

```sh
docker compose down -v
```

## Run type check

```sh
docker compose exec api npm run type-check
```

## Run linter

```sh
docker compose exec api npm run lint
```

## Run formatter

```sh
docker compose exec api npm run format
```

## Run test

```sh
docker compose exec api npm run test
```
