import pg from "pg";
const { Pool } = pg;
import dotenv from "dotenv";
dotenv.config();

const user = process.env.DB_USER;
const host = process.env.DB_HOST;
const database = process.env.DB_DATABASE;
const password = process.env.DB_PASS;
const port = process.env.DB_PORT;

const pool = new Pool({
  user: user,
  host: host,
  database: database,
  password: password,
  port: port,
});

export const profileImageSources = [
  "./assets/images/Profile/carlston_1.png",
  "./assets/images/Profile/carlston_2.png",
  "./assets/images/Profile/carlston_3.png",
  "./assets/images/Profile/carlston_4.png",
];

export default pool;
