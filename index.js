const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');

const api = require('./api');

const PORT = process.env.PORT || 3001;
const APP_NAME = 'phonebook';
const DB_URL = process.env.DB_URL || `mongodb://localhost/${APP_NAME}`;

const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token');
    res.header('Content-Security-Policy', 'default-src \'self\' *');
    next();
  });
}

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/', api);

mongoose.connect(DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
  },
  () => {
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Example app listening at http://localhost:${PORT}`);
    });
  });
