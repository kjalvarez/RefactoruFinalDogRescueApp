module.exports = {
	login: function(req, res) {
		res.render('login', {
			title: 'Western Dogs Rescue of Colorado'
		})
	},

	index: function(req, res) {
		res.render('index', {
			title: 'Western Dogs Rescue of Colorado',
			title2: 'Welcome to our volunteer portal!'
		})
	}
}