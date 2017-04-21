const express = require('express');
const logger = require('debug')('express');
const fs = require('fs');
const path = require('path');
//const sqlite = require('sql.js');
const compression = require('compression');
const cors = require('cors');

const router = require('./routes');
const filebuffer = fs.readFileSync('db/tastin.sqlite3');

//const db = new sqlite.Database(filebuffer);

require('./controllers/restaurants');

const app = express();

/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/

app.use(cors());
app.use('/api', router);
app.use(compression());

if(process.env.ENV !== 'development') {
  app.use((err, req, res, next) => {
    logger(err.name, err.message);
    res.json({
      name: err.name,
      message: err.message
    });
  });
}

app.set('port', (process.env.PORT || 3001));

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
