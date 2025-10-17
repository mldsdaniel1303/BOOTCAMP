# my-chrome-extension — E2E com Playwright em Docker e CI

## Rodando localmente (sem Docker)
1. Instale Node 20
2. npm ci
3. npm run build
4. npm run test:e2e

## Rodando com Docker Compose
docker compose build
docker compose run --rm e2e

## GitHub Actions
O workflow executa build + testes + artefatos (relatório Playwright e extensão zip).
