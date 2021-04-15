var unirest = require("unirest");

var req = unirest("GET", "https://livescore6.p.rapidapi.com/matches/v2/list-live");

req.query({
	"Category": "soccer"
});

req.headers({
	"x-rapidapi-key": "27418221f3msh88f2024147983f7p1154ffjsna20aaa1057f6",
	"x-rapidapi-host": "livescore6.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});