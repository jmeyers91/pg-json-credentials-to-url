# pg-json-credentials-to-url

This package makes it easy to convert from raw JSON Postgres credentials to a Postgres connection URL.

## Install

```shell
npm install pg-json-credentials-to-url
```

## Examples

You can use the package directly by importing it.

```ts
import pgJsonCredentialsToUrl from "pg-json-credentials-to-url";

export const DATABASE_URL = pgJsonCredentialsToUrl(
  process.env.DATABASE_CREDENTIALS
);
```

Or use it in as a shell utility.

```shell
export DATABASE_URL="$(pg-json-credentials-to-url $DATABASE_CREDENTIALS)"

npx prisma migrate deploy
```
