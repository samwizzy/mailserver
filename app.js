const express = require("express");
const path = require("path");
const cors = require("cors");
const multer = require("multer");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { google } = require("googleapis");
const nodemailer = require("nodemailer");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const mailRouter = require("./routes/mail");

const app = express();
require("dotenv").config();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const Storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./attachments");
  },
  filename: function (req, file, callback) {
    callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
  },
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/mails", mailRouter);

module.exports = app;
