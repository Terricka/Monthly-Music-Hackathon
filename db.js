var tasks = require('./todolist.json');
var fs = require('fs');
//var files = fs.readdirSync('/assets/photos/');

var db = {
	getTaskList: function(){
		
			var tsk = tasks.slice(0);
			console.log("going");
			return tsk;
		},
		getTask: (id) => {
			for(let task of tasks){
				if(task.id == id)

					return Object.assign({}, task);
			}
			return false;
		},
		addTask: (task)=> {
			task.id = task.length;
			tasks.push(item);
			db.updateTaskList();
		},
		deleteTask: (task)=> {
			task.id = task.length;
			tasks.pop(item);
			db.updateTaskList();
		},

		updateTaskList: ()=> {
			fs.writeFile('./todolist.json', JSON.stringify(list), (err) => {
	           if (err){
	            console.log('Something went wrong, didnt update');
		        }else {
		            console.log('Updated');
		        
		        }
		    });

		}

};

module.exports = db;