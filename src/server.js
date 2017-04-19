const express = require('express');
const fs = require('fs');
const path = require('path');
const sqlite = require('sql.js');

const filebuffer = fs.readFileSync('db/tastin.sqlite3');

const db = new sqlite.Database(filebuffer);

const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
//if (process.env.NODE_ENV === 'production') {
  app.use(express.static('front/build'));

  app.get('/app/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../front/build', 'index.html'));
  });
//}

const COLUMNS = [
  'carbohydrate_g',
  'protein_g',
  'fa_sat_g',
  'fa_mono_g',
  'fa_poly_g',
  'kcal',
  'description',
];
app.get('/api/food', (req, res) => {
  res.send('asdf');
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
