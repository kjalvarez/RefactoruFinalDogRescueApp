var mongoose=require('mongoose');

var DogSchema = new mongoose.Schema({
	name: String,
	breed: String,
	age: String,
	sex: String,
	bio: String,
	foster: String,
	photo: String
});

var AvailableModel = module.exports = mongoose.model('available', DogSchema);






