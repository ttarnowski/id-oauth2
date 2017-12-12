const express = require('express');
const bodyParser = require('body-parser');
const OAuth2Server = require('oauth2-server');
const { Request, Response } = OAuth2Server;

const connectTokenHandler = require('./handlers/connectTokenHandler');

const oauth = new OAuth2Server({
  model: require('./model')
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/token', connectTokenHandler(oauth));

app.listen(8000);