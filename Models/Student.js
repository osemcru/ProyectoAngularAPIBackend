let moongoose = require('mongoose');
let Schema = moongoose.Schema;

let PlaceSchema = Schema({
name: String,
email: String
});

module.exports = moongoose.model('Student', PlaceSchema);