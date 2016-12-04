// var fs = require('fs');
// var express = require('express');
// var db = require('./db');
// var router = express.Router();

// // router.post('/tasks', function(req, res, next){
// // 	var newTask = {
// // 		description: req.body.description,
// // 		id: req.body.id
// // 	}

// // 	db.addTask(newTask);
// // 	res.json('task added');
// // })

// router.get('/tasks/:task_id', function(req,res,next){
// 	let id = req.params.task_id;
// 	let task = db.getTask(id);
// 	console.log(task);
// 	if(task){
// 		res.json(task);
// 	} else {
// 		res.json("not found");
// 	}

// 	next();
// })

// router.get('/', function(req,res,next){
// 	let list = db.getTaskList();
// 	res.json(list);

// 	next();
// })

// router.post('/tasks', function(req,res,next){
// 	tasks.push(req.body);
// 	console.log(req.body);
// })


// module.exports = router;