const express = require('express');

const app = express();

app.get('/testee', (req, res) => {
  return res.json({ msg: 'Hello world!'})
});

app.listen(3333);