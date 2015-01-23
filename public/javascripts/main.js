$(document).ready(function() {
	$('.fosterContainer').hide();

	$('#findButton').on('click', function () {
		$('.fosterContainer').show();
		$.ajax( {
			dataType: 'json',
			url: '/findCOfoster',
			success: function (data) {
				console.log(data); 
				for(var i=0; i<data.length; i++) {
				$('.attach').append('<div>' + data[i].firstname + " " + data[i].lastname + ": " + data[i].phone + ", " + 'Zip code: ' + data[i].zip + '</div>' + '<br>');
				}
				// Write for Loop here to find Fosters w/o dog
				// Find fosters outside of Colorado 
			}
			// data: {name: "Fido"} to send data to server; accessible as req.query.name or req.body.name based on what kind of request
		})
		// Now can append/ prepend info
	});
});