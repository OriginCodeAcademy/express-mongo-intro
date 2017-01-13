const express = require('express');
const morgan = require('morgan');
const router = require('./routes');

var bodyParser = require('body-parser')

var items = [
	{
  	todoItemId: 0,
  	name: 'an item',
  	priority: 3,
  	completed: false
	},
	{
  	todoItemId: 1,
  	name: 'another item',
  	priority: 2,
  	completed: false
	},
	{
  	todoItemId: 2,
  	name: 'a done item',
  	priority: 1,
  	completed: true
	}
];

// create an express instance
const app = express();

// apply middleware
app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/', router);

module.exports = app;
