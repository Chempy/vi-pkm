var request = require('request')

module.exports = {}

module.exports.getPokemon = function(name, callback) {
  request("http://pokeapi.co/api/v1/pokemon/"+name, function (error, response, body) {
    console.log(response.statusCode);
    if (response.statusCode == 404) {
      callback.call(this, JSON.parse({"error": "failed to get pokemon"}));
    }
    else if (response.statusCode == 200) {
      callback.call(this, JSON.parse(body));
    }
    else {
      callback.call(this, JSON.parse({"error": "weird error"}))
    }
  })
}