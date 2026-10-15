require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mariadb = require("mariadb");
const app = express();
app.use(cors());
app.use(express.json());