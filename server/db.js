import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: 'us-east.connect.psdb.cloud',
  port: 3306,
  user: 'yslh46tdl7g4oedn9wkr',
  password: 'pscale_pw_TfSlVM2BVMCcx61y1DD05xsmefzhuEA4BApCk9q2bew',
  database: 'torneos',
  ssl: {
    rejectUnauthorized: false
  }
})