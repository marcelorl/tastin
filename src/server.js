const express = require('express');
const logger = require('debug')('express');
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./doc/api.json');

const routes = require('./routes');

const app = express();

/**
 * app.use(function(req, res, next) {
 *    res.header("Access-Control-Allow-Origin", "*");
 *    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 *    next();
 * });
 */

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

app.use('/', express.static('../build'));

app.use('/api', routes);

// Swagger
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

if (process.env.NODE_ENV === 'production') {
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
