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

* CRUD operations

* Wire up app

* Using Mongoose and a Schema


---


## 5 - Loopback basics, models, swagger

* What is Loopback

* Scaffolding and configuring

* Creating Model

* Swagger

* Passport
