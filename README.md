create Index.html: create divs structure, create an text input, and link js files.

create main.js: create functions to add tasks and delete tasks.

add api: todolist.json

create app.js: we set up here our server on our computer and create endpoints 
				to navigate through our api folders.

create task.js: here we connect the api to the server through router.get

create db.js: we use this to update and pull todolist.json in base of what we type in the text input.

------------------------------------------------------------------------------------------

back to main.js: we set up a ajax request to pull and push data from the database

index.html: we place input inside a <form>  in which we state the url to connect to the api.

now we want to update the api with the input text by posting to a form and send that to the server:
index.html: generate a new input button
main.js: in saveTask function we put an event listener on the submit button to prevent the page to refresh.

when someone clicks the submit button we run the saveTask function to save the input text on the server:
every time submit is clicked we add an new id linked to the current text input (taskDiv.id = i++).

create ajax function with method:"POST", url with endpoint '/tasks'

run the ajax function every time a newTask is created. 
So we save the taks on the page first with saveTask func and we then send it to the server with sendTask func.
inside sendTask: create ajax function with method:"POST", url with endpoint '/tasks'.
task.js: create a router.post with '/tasks' endpoint

STUCK: localHost 300 not found.

WHY WHY WHY







main.js: set up the delete button: add a <span></span> and a <p><p/> 
		inside task div every time a new text is added into the text input.



