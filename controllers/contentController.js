var AvailableModel = require('../models/availableDogs')

module.exports = {
	resources: function(req, res) {
		res.render('resources', {
			title: 'Western Dogs Rescue of Colorado',
			title2: 'Resources'
		})

	},

	displayDogs: function(req, res) {
		AvailableModel.find({}, function (err, data) {
			console.log('Error test', err)
			console.log(data);
			res.render('currentDogs', {
				dogs: data, 
				title: 'Western Dogs Rescue of Colorado',
				title2: 'Adoptable dogs'
			})
		})
	},

	locator: function(req, res) {
		res.render('locate', {
			title: 'Western Dogs Rescue of Colorado',
			title2: 'Locator',
			zipcode: 80903
		})
	},

	addDogForm: function (req, res) {
		res.render('addDogs', {
			title: 'Western Dogs Rescue of Colorado',
			title2: 'Add a dog'
		})
	},

	addDog: function (req, res) {
		var name = req.body.name;
		var age = req.body.age;
		var breed = req.body.breed;
		var sex = req.body.sex;
		var foster = req.body.foster;
		var biography = req.body.biography; 
		var photo = req.body.photo


		var newDog = new AvailableModel({
			name: req.body.name,
			age: req.body.age,
			breed: req.body.breed,
			sex: req.body.sex,
			foster: req.body.foster,
			bio: req.body.biography,
			photo: req.body.photo
		})
		newDog.save(function(err, data) {
			if(err) {
				console.log('error')
			} else {
				res.render('addSuccess', {
					title: 'Western Dogs Rescue of Colorado'
				})
			} 
		});

	}
	}  

