
const express = require('express');

const usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = usersRouter;
