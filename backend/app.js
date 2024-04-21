const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParse = require('cookie-parser');

const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoute');

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParse());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString;
  // console.log(req.headers);
  console.log(req.cookies);
  next();
});

// common route
app.use('/api/v1/todos', todoRoutes);
app.use('/api/v1/users', userRoutes);

module.exports = app;
