const http = require('http');
const express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const port = 3000;
var tasks = require('./todolist')

const db = require('./db.js');

const app = express();
var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/tasks', );

app.get('/tasks', function(req, res, next){
	res.json(db.getTaskList());
	let tasks = db.getTaskList();
});

app.get('/tasks/:task_id', function(req,res,next){
	let id = req.params.task_id;
	let task = db.getTask(id);
	console.log(task);
	if(task){
		res.json(task);
	} else {
		res.json("not found");
	}

	next();
})

app.post('/tasks', function(req, res, next){
	db.getTaskList(req.body);
	console.log(req.body);
	tasks.push(req.body);
	// tasks.pop(req.body);
});

app.post('/tasks', function(req, res, next){
	db.getTaskList(req.body);
	console.log(req.body);
	tasks.pop(req.body);
});



/*====================
    YOUR CODE
====================*/

const server = http.createServer(app);
server.listen(port, () => {
    console.log("Server running and listening at http://localhost:${port}/");
});


   module.exports = app;