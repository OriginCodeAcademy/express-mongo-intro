const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const connection = mongoose.createConnection('mongodb://localhost:27017/express_demo');

var schema = new Schema({ name: String, color: String, number: Number });
var Item = mongoose.model('Item', schema);
var item = new Item({ name: 'Corrolla', color: 'red', number: 10 });
new Item({ name: 'Ford', color: 'black', number: 100 });
console.log(item);

// update
item.name = 'Lexus';
item.save();
console.log(`Updated:\n ${item}`);

// schema enforced
delete item.name;
item.save(); // this does not happen
console.log(`Item was not updated:\n ${item}`);

// will save
item.name = 'Honda';
item.save();
console.log(`Updated:\n ${item}`);

Item.findOne({ name: 'Ford' }, function(err, itemFound){
  console.log(err)
  console.log(`color: ${itemFound}`)
})
