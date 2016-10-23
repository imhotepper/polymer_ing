let portno = 3001;
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

arrTodos = [{title:'hond uitlaten', content:'hond goed uitlaten'}]; 

app.use(express.static('.'));
app.use(bodyParser.json())

app.get('/data/todos', function(req, res){
    console.log(`returning all todos`);
    res.end(JSON.stringify(arrTodos));
}); 
app.post('/data/todo', function(req, res){
    var object = req.body;
    console.log(`adding a new todo to the list ${object}`, object);
    arrTodos.push(object);
    res.end();
});

app.listen(portno, function(){
    console.log(`server listening on port ${portno}`);
});