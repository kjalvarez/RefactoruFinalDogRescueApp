var FosterModel = require('../models/fosters')

module.exports = {
	findAll: function (req, res) {
		FosterModel.find({}, function (err, data) {
			res.send(data);
		});
	}
}
