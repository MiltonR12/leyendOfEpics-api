import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: 'us-east.connect.psdb.cloud',
  port: 3306,
  user: 'gvyubdleo6bq4ud33zxz',
  password: 'pscale_pw_bVl49fbVB1CJb675Ka8QTdts1zDTGYc81CYnz0dFfP2',
  database: 'torneos',
  ssl: {
    rejectUnauthorized: false
  }
})