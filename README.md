# pg-json-credentials-to-url

This package makes it easy to convert from raw JSON Postgres credentials to a Postgres connection URL.
The expected JSON format matches the format used in AWS RDS credential secrets.

## Install

```shell
npm install pg-json-credentials-to-url
```

## Usage

You can use the package directly by importing it.

```ts
import { pgJsonCredentialsToUrl } from "pg-json-credentials-to-url";

const DATABASE_URL = pgJsonCredentialsToUrl(
  '{"username":"username","password":"password","host":"host","port":"5432","dbname":"database"}'
);

// Outputs: "postgres://username:password@host:5432/database"
console.log(DATABASE_URL);
```

Or use it in shell scripts.

```shell
export DATABASE_URL="$(pg-json-credentials-to-url $DATABASE_CREDENTIALS)"

npx prisma migrate deploy
```

## API

- `pgJsonCredentialsToUrl(credentials: string | object | undefined): string` - Takes your credentials as a JSON string or a pre-parsed object and returns a Postgres URL string. Throws if any errors are encountered parsing the database credentials.

## CLI

- `pg-json-credentials-to-url DATABASE_CREDENTIALS_JSON` - Takes a single required argument and outputs the URL to stdout.
