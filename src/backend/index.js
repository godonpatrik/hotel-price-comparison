const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database/database').sequelize;
const cors = require('cors');
const api = require('./routes/api');
const app = express();
const PORT = 3000;

app.use(cors());

database.sync()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use(bodyParser.json());
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', api);

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
