const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');

const api = require('./api');

const PORT = process.env.PORT || 3001;
const APP_NAME = '';
const DB_URL = process.env.DB_URL || `mongodb://localhost/${APP_NAME}`;

const app = express();
app.use(helmet());

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
