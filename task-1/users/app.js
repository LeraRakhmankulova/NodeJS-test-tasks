const express = require('express');
const { errors } = require('celebrate');
require('dotenv').config();

const app = express();
const userRoutes = require('./routes/users');

app.use(express.json());

app.use('/users', userRoutes);

app.use('*', (req, res) => {
  res.status(404).send({ 'message': 'Route not found' });
});

app.use(errors());

app.listen(3000, () => {
  console.log('User service running on port 3000');
});
