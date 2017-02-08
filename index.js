var express = require('express');
var app = express();
//use node port or default to 3000
const PORT = process.env.PORT || 3000;

//direct all https to http
app.use(function(req,res,next){
	if(req.headers['x-forwarded-proto'] === 'https'){
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next();
	}
});

app.use(express.static('public'));



app.listen(PORT, function(err){
	if (err) {
		console.log(err);
	} else {
		console.log('app is up and running on port: ' + PORT);
	}
});