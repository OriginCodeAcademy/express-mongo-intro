const express = require('express');
const morgan = require('morgan');

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

// route handler for requests to /
app.get('/', function(req, res) {
	res.json({ "status": "ok" });
});

app.get('/api/TodoItems', function(req, res) {
	res.json(items);
});

app.post('/api/TodoItems', function(req, res) {
	res.status(201).json(req.body);
});

app.get('/api/TodoItems/:id', function(req, res) {
	res.json(items[req.params.id]);
});

app.delete('/api/TodoItems/:id', function(req, res) {
	let item = items[req.params.id]
	items.splice( req.params.id, 1);
  res.json(item);
});

app.put('/api/TodoItems', function(req, res) {
  res.status(201).json(req.body);
});

module.exports = app;