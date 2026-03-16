import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  password: "AbhilashDB",
  host: "localhost",
  port: 5432,
  database: "skynet_epr"
});