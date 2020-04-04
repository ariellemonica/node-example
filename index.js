var express = require('express');
var weather = require('weather-js');
var path = require('path');

var app = express();
var port = 3000;

app.get('/index.php', function(req, res) {
	res.sendFile(path.join(__dirname + '/goober.html'));
});

app.get('/user/:name', function(req, res) {
	var name = req.params.name;
	res.send(`<h1>Hi ${name}!</h1>`);
});

app.get('/weather/:city/:unit', function(req, res) {
	var city = req.params.city;
	var unit = req.params.unit;

	console.log(city, unit);

	weather.find({search: city, degreeType: unit}, function(err, result) {
		if(err) console.log(err);
	 
		// console.log(JSON.stringify(result, null, 2));

		var weatherData = `<h1>The weather in ${city} is ${result[0].current.temperature} degrees ${unit}.`;

		console.log('Yo!');

		res.send(`${weatherData}`);
	});

	
});

app.listen(port, function() {
	console.log('Server running...');
});