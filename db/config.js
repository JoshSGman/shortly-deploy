var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

mongoose.connect('mongodb://localhost/shortlydb');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Url = new Schema({
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: {type: Number, default: 0}
});

var User = new Schema({
  username: String,
  password: String
});

Url.plugin(timestamps);
User.plugin(timestamps);

exports.UrlModel = mongoose.model('Urls', Url);
exports.UserModel = mongoose.model('Users', User);

var userInstance = new exports.UserModel();
userInstance.username = 'joshua';
userInstance.password = 'joshua';

userInstance.save();

console.log('it worked!');

exports.UserModel.find({}, function(err, users) {
  console.log(users);
});
