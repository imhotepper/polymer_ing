let portno = 3001;
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

arrVotes = []; 

app.use(express.static('.'));
app.use(bodyParser.json())


app.get('/vote', function(req, res){
    fs.readFile('./index.html', function(error, content) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(content, 'utf-8');
	});
}); 

app.get('/details/*', function(req, res){
    fs.readFile('./index.html', function(error, content) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(content, 'utf-8');
	});
}); 


app.get('/data/votes', function(req, res){
    console.log(`returning all votes`);
    res.end(JSON.stringify(arrVotes));
}); 
app.post('/data/vote', function(req, res){
    var object = req.body;
    console.log(`adding a new vote to the list ${object}`, object);
    arrVotes.push(object);
    res.end();
});

app.listen(portno, function(){
    console.log(`server listening on port ${portno}`);
});