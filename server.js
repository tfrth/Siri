var http = require('http');
var port = 8887;



var messages = ["Hello there.","I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that."];

var myFunk = function(req, res) {
	if(req.method === 'GET') {
		res.writeHead(200, {
		'Connection': 'close',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
		})
	res.end(JSON.stringify({message: randomMessage(messages)}))
	}
}


var randomMessage = function(array) {
	var num = Math.floor(Math.random() * (array.length));
	return array[num];
} 

http.createServer(myFunk).listen(port);

console.log('listening on port' + port);




