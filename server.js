import express from "express";
import pool from "./db.js";
import cors from "cors";
import { profileImageSources } from "./db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.get("/projects", (req, res) => {
  pool.query("SELECT * FROM web_dev_projects_info", (error, result) => {
    if (error) {
      throw error;
    } else {
      res.json(result.rows);
    }
  });
});

app.get("/profile_image", (req, res) => {
  res.json(profileImageSources);
});

app.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}/`);
});
