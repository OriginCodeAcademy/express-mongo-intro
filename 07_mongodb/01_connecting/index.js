const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/express_demo';

MongoClient.connect(url, (err, db) => {
  if (err) {
    console.log(`Unable to connect to the mongoDB server. Error: ${err}`);
  } else {
    console.log(`Connected to: ${url}`);
    // Always close the db connection when you are done
    db.close();
    console.log(`Closed Connection.`);
  }
});
