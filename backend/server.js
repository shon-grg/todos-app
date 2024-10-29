const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

// PORT
const port = process.env.PORT || 3000;
// const port = 3000;

// Database connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    family: 4,
  })
  .then(() => console.log('DB connection successful '));

app.listen(port, () => {
  console.log(`App running on ${port}...`);
});
