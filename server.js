import express from "express";
import pool from "./db.js";
import cors from "cors";
import manuelProjects, { profileImageSources } from "./db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).redirect("https://carlston325.github.io/portfolio_static");
});

app.get("/projects", (req, res) => {
  //Manuel Database in db.js
  const data = {
    profileImageSources,
    projects: manuelProjects,
  };
  res.json(data);

  // PSQL Database Connection
  // pool.query("SELECT * FROM web_dev_projects_info", (error, result) => {
  //   if (error) {
  //     console.error("Database query error:", error);
  //     res.status(500).json({ error: "Internal Server Error" });
  //   } else {
  //     const data = {
  //       profileImageSources,
  //       projects: [...result.rows],
  //     };
  //     res.json(data);
  //   }
  // });
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  console.log(`Server is running on port: https://backend-fmv0.onrender.com/`);
});
