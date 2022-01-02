const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({ ok: true });
});

router.get('/echo', (req, res) => {
  res.status(200).send(req.body);
});

router.get('/login', (req, res) => {
  //Authenticate User

  const password = req.body.password;
})

module.exports = router;