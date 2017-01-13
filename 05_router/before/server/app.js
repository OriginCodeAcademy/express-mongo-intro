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

// create a router to organize routes
const router = express.Router();
app.use('/', router);

// route handler for requests to /
router
	.route('/')
	.all(function(req, res, next) {
		res.json({ "status": "ok" });
	})

router
	.route('/api/TodoItems')
	.get(function(req, res, next) {
		res.json(items);
	})
	.post(function(req, res, next) {
		res.status(201).json(req.body);
	})
	.put(function(req, res, next) {
		res.status(201).json(req.body);
	});

router
	.route('/api/TodoItems/:id')
	.get(function(req, res, next) {
		res.json(items[req.params.id]);
	})
	.delete(function(req, res, next) {
		let item = items[req.params.id]
		items.splice( req.params.id, 1);
  	res.json(item);
	})

module.exports = app;
