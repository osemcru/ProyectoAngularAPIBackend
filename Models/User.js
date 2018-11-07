let moongoose = require('mongoose');
let Schema = moongoose.Schema;

let PlaceSchema = Schema({
nick: String,
contrasena: String
});

module.exports = moongoose.model('User', PlaceSchema);