let url = "http://localhost:3000";
var taskList = document.getElementById('taskList');

var i = 0;

var audioList ="";
var reponse = "";

function deleteTask(){
	console.log("delete")
}

window.onload=function(){
	$.ajax({
		method:"GET",
		url: url + `/tasks`
	}).done(function(response){
		console.log('asd');
		console.log(response.length);

		for(i = 0; i < response.length; i++){
			var count = i;

			console.log(response[i]);



			// var description = document.createElement('p');
			// description.className = "taskName";
			// description.innerHTML = response[i].description;

			// var details = document.createElement('div');
			// details.className="details";


			var audio = document.createElement('audio');
			var source = document.createElement('source');
			audio.appendChild(source);
			audio.controls = true;
			//audio.autoplay = true;
			audio.className = "audio";
			audio.id = "audio-"+response[i].id;
			source.src = response[i].soundurl;
			source.type = "audio/wav";

			

			taskList.appendChild(audio);
			// div.appendChild(description);
			// div.appendChild(details);

			// $.ajax({
			// 	method:"GET",
			// 	url: url+'/tasks/'+response[i].id

			// }).done(function(response){
			// 	console.log("yes")
			// 	var desc = document.createElement('p');
			// 	desc.id = 'task-' + response.id;

			// 	taskList.appendChild(desc);
			// })

 audioList = document.getElementsByClassName("audio");
// console.log(audioList);



			

		}


	for(var i = 0; i < audioList.length; i++){
		var sound = new Audio(response[i].soundurl);
		// console.log(sound);
		function play(sound){
			if(!sound.paused) sound.pause();
	  sound.currentTime = 0;
	  sound.play();
	  console.log(sound);
		}
		
	}


	})

};


$("#start").click(function(){
	$(this).css("background","green");

});

$("#audio-3").hide();

$("#stop").click(function(){
	$("#start").css("background", "#fff");
});

$("#save").click(function(){
	$("#audio-3").show();
})




// isPlaying(nowPlaying);

function isPlaying(playerId) {
    var player = document.getElementById(playerId);
    return !player.paused && !player.ended && 0 < player.currentTime;


}




function sendTask(data){
	$.ajax({
		type: "POST",
		url: url + '/tasks',
		data: data,
		success: console.log("sent")
	})

	let config = {
		method: "GET",
		headers: new Headers({})
	}

	let request = new Request(`${url}/tasks`, config);
	  fetch(request)
        .then(function(res) {
            if (res.status == 200){
                return res.json();
            }
            else{
                throw new Error('Something went wrong on api server!');
            }
        })
        .then(function(res) {
            console.log("The result is" + res);
            // saveTask();
            res.json(res);
        })

    .catch(function(err) {
        console.warn("Couldn't fetch info list");
        console.log(err);
    });


}

// function save(){
//     //soundFile.play(); // play the result!
//     // soundsrc = "sounds/sound2.wav";
//     saveSound(soundFile, 'js/mySound2.wav');

// }


function saveSound(){
	// console.log("running");

	var soundsrc = "sounds/sound2.wav";
	if(task){
		newTask = { description: "this sound", id: i, soundurl: soundsrc};
		sendTask(newTask);

	}

	var taskDiv = document.createElement('div');
	taskDiv.classList.add('task');
	console.log(task);
	taskDiv.innerHTML += `<p class='taskName'>${task}</p><span class='deleteTask'>x</span>`;

	taskDiv.id = i++;
	taskList.appendChild(taskDiv);
	taskInput.value = "";
}




