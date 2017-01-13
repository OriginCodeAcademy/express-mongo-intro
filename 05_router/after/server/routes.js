const express = require('express');

// create a router to organize routes
const router = express.Router();

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

  module.exports = router;
