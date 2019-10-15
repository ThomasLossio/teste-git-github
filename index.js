const express = require("express");

const app = express();

app.get("/testes", (req, res) => {
  return res.json({ msg: "Hello worlds!" });
});

app.listen(3333);
