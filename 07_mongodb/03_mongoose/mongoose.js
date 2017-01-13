var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const Schema = mongoose.Schema;

var schema = new Schema({ name: String, inventory: {} });
var Character = mongoose.model('Character', schema);

// will store `inventory` field if it is not empty
var frodo = new Character({ name: 'Frodo', inventory: { ringOfPower: 1 }});
frodo.save();
Character.findOne({ name: 'Frodo' }, function(err, character) {
  if (err) {
    console.log(err)
  } else {
    console.log(character); // { name: 'Frodo', inventory: { ringOfPower: 1 }}
  }
});
