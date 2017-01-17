# Express with MongoDb

Javascript web servers and databases


---


1. Node and Express basics, Http vs Express

2. Project Structure, Middleware, Testing

3. Routing and templating

4. MongoDb and Mongoose

5. Loopback basics, models, swagger, passport


---

## 1 - Express basics, middleware, and testing

* What is Express?

* Http server using Node

* Express minimum setup


----


## What is Express

* Node webserver framework

* Unopinionated

* Uses: API, Web servers

* Version 4

* Middleware/Plugins


---


## 2 - Express middleware/plugins and testing

* Middleware/Plugins

* App structure

* Testing node apps with Mocha and Chai


---


## 3 - Express routing, and templating

* Using routes

* Template engines and EJS basics


----

## Routing

* Organizing the routes using built in utilities

* Refactor and structure applications routes


----

## Templating

* Passing HTML back to the client

* Break site structure into reusable pieces

* Default settings (view engine)

----

## EJS

* Interpolation - interjecting dynamic content

* EJS formatting Example:
```javascript
<h1><% 1 + 1 %></h1>
```

* Passing Data
```javascript
<h1><%= someObject.title %></h1>
```

* Looping (breaking in and out)

* Including partials (use [ejs-i](https://www.npmjs.com/package/ejs-i))


---

## 4 - MongoDb and Mongoose

* What is MongoDb

* Installation

* CRUD operations

* Native mongodb driver


---


## 5 - Loopback basics, models, swagger

* What is Loopback

* Scaffolding and configuring

* Creating Model

* Swagger

* Passport

----

## What is Loopback

* [Loopback.io](http://loopback.io/) Extensible Framework based on Express

* [Docs](http://loopback.io/doc/en/lb3/index.html) are fairly detailed for 3.0

* [Yeoman](http://yeoman.io/) Generator is being used

----

## Getting Started with Loopback

* install the generator
```
$ npm install -g strongloop
```

* Scaffold out an app
```
$ slc loopback
```

----

## Models

* Add a model
```
slc loopback:model
```

* Remove remote Methods
```
{MODEL_NAME}.disableRemoteMethod("create", true);
```

* Create Relationships
```
slc loopback:relation
```

----

## DataSource

* Docs for [MongoDB connector](http://loopback.io/doc/en/lb3/MongoDB-connector.html)

* Add a DataSource
```
$ slc loopback:datasource
```

* Add Connector
```
$ npm install loopback-connector-mongodb
```

* Update models to use MongoDB (model-config.js)


----

## Configuring

* Base url for your API (config.json)

* Local, staging, and production modes
```
test.js
```

----

## Middleware

* Serving Static
```
"files": {
  "loopback#static": {
    "params": "$!../client"
  }
}
```

----

## Passport

* [Passport](http://passportjs.org/) is a library that makes authentication simple and secure

* [Loopback-passport](https://www.npmjs.com/package/loopback-passport) a module that enables Passport

* [Example project](https://github.com/strongloop/loopback-example-passport) using passport with Loopback
