import { pgJsonCredentialsToUrl } from ".";

describe("pgJsonCredentialsToUrl", () => {
  test("Should successfully parse postgres credential JSON objects into URLs", () => {
    expect(
      pgJsonCredentialsToUrl({
        username: "username",
        password: "password",
        host: "host",
        port: "5432",
        dbname: "database",
      })
    ).toEqual("postgres://username:password@host:5432/database");
  });

  test("Should successfully parse postgres credential JSON strings into URLs", () => {
    expect(
      pgJsonCredentialsToUrl(
        JSON.stringify({
          username: "username",
          password: "password",
          host: "host",
          port: "5432",
          dbname: "database",
        })
      )
    ).toEqual("postgres://username:password@host:5432/database");
  });

  test("Should throw if username is missing", () => {
    expect(() =>
      pgJsonCredentialsToUrl({
        password: "password",
        host: "host",
        port: "5432",
        dbname: "database",
      })
    ).toThrow("Missing postgres username.");
  });

  test("Should throw if password is missing", () => {
    expect(() =>
      pgJsonCredentialsToUrl({
        username: "username",
        host: "host",
        port: "5432",
        dbname: "database",
      })
    ).toThrow("Missing postgres password.");
  });

  test("Should throw if port is missing", () => {
    expect(() =>
      pgJsonCredentialsToUrl({
        username: "username",
        password: "password",
        host: "host",
        dbname: "database",
      })
    ).toThrow("Missing postgres port.");
  });

  test("Should throw if host is missing", () => {
    expect(() =>
      pgJsonCredentialsToUrl({
        username: "username",
        password: "password",
        port: "5432",
        dbname: "database",
      })
    ).toThrow("Missing postgres host.");
  });

  test("Should throw if database name is missing", () => {
    expect(() =>
      pgJsonCredentialsToUrl({
        username: "username",
        password: "password",
        host: "host",
        port: "5432",
      })
    ).toThrow("Missing postgres database name.");
  });

  test("Should throw if credentials are missing", () => {
    expect(() => pgJsonCredentialsToUrl(undefined)).toThrow(
      "Postgres credentials JSON is undefined"
    );
  });
});
