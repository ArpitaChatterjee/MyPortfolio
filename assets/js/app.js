const express = require("express");

const cors = require("cors");

require("dotenv").config();

const mg = require("mailgun-js")({
  apiKey: process.env.API_KEY,
  domain: process.env.DOMAIN,
});

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/send", async (req, res) => {
  const { name, email, subject, body } = req.body;

  var data = {
    from: `${name} <${email}>`,
    to: process.env.RECIEVER,
    subject: subject,
    text: body,
  };

  try {
    mg.messages().send(data, function (error, body) {
      console.log(body);
      res.status(200).json({
        message: "email sent successfully",
      });
    });
  } catch (err) {
    res.status(500).json({
      message: "email cannot be sent",
      error: err,
    });
  }
});

module.exports = app;
