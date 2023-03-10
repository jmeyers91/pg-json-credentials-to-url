export function pgJsonCredentialsToUrl(
  json: string | object | undefined
): string {
  if (json === undefined) {
    throw new Error("Postgres credentials JSON is undefined");
  }

  const parsedJson = typeof json === "string" ? JSON.parse(json) : json;
  const { username, password, host, port, dbname } = parsedJson;

  if (typeof username !== "string") {
    throw new Error("Missing postgres username.");
  }
  if (typeof password !== "string") {
    throw new Error("Missing postgres password.");
  }
  if (typeof host !== "string") {
    throw new Error("Missing postgres host.");
  }
  if (typeof port !== "string" && typeof port !== "number") {
    throw new Error("Missing postgres port.");
  }
  if (typeof dbname !== "string") {
    throw new Error("Missing postgres database name.");
  }

  return `postgres://${encodeURIComponent(username)}:${encodeURIComponent(
    password
  )}@${host}:${port}/${dbname}`;
}
