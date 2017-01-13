const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/express_demo';

MongoClient.connect(url, (err, db) => {
  if (err) {
    console.log(`Unable to connect to the mongoDB server. Error: ${err}`);
  } else {
    console.log(`Connected to: ${url}`);
    // Get the documents collection
    var collection = db.collection('items');

    // Create some users
    var item1 = { name: 'car', color: 'black', number: 12 };
    var item2 = { name: 'bike', color: 'yellow', number: 24 };
    var item3 = { name: 'apple', color: 'red', number: 105 };

    // Insert (CREATE) an item
    // TODO: also accepts and array
    collection.insert(item1, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Done. ${result.result.n} Items were inserted into the collection: ${JSON.stringify(result)}`);
      };
      // Always close the db connection when you are done
      db.close();
      console.log(`Closed Connection.`);
    });

    // Find (READ)
    // collection.find({name: 'car'}).toArray(function (err, result) {
    //   if (err) {
    //     console.log(err);
    //   } else if (result) {
    //     console.log(`${JSON.stringify(result)}`);
    //   } else {
    //     console.log(`No matching document(s) found.`);
    //   }
    //   // Always close the db connection when you are done
    //   db.close();
    //   console.log(`Closed Connection.`);
    // });

    // Update (UPDATE) an item
    // collection.update({ name: 'car' }, { $set: { color: 'green' }}, (err, results) => {
    //   if (err) {
    //     console.log(err);
    //   } else if (results) {
    //     console.log(`Updated documents. ${JSON.stringify(results)}`);
    //   } else {
    //     console.log(`No matching documents found.`);
    //   }
      // Always close the db connection when you are done
      // db.close();
      // console.log(`Closed Connection.`);
    //});

    // Remove (DELETE) an item
    // collection.remove({ name: 'car' }, (err, results) => {
    //   if (err) {
    //     console.log(err);
    //   } else if (results) {
    //     console.log(`Removed documents. ${JSON.stringify(results)}`);
    //   } else {
    //     console.log(`No matching documents found.`);
    //   }
    //   // Always close the db connection when you are done
    //   db.close();
    //   console.log(`Closed Connection.`);
    // });

  }
});
