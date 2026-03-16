import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  password: process.env.DATABASE_KEY,
  host: "localhost",
  port: 5432,
  database: "skynet_epr"
});