#!/usr/bin/env node
import { pgJsonCredentialsToUrl } from ".";

const credentials = process.argv[2];

if (!credentials) {
  console.log("Usage: pg-json-credentials-to-url JSON_CREDENTIALS");
  process.exit(1);
}

process.stdout.write(pgJsonCredentialsToUrl(credentials));
