#Week 2: Difficulty Spike

By the close of Sunday before the beginning of week 2 I was actually feeling pretty comfortable with the material we covered and had a sense of confidence. This would all be shattered by the ICBM of week 2. We started off with a framework of a new todo application and were told to get it working. No problem that's a bunch of copy pasta into the right files and making sure the references were correct in the HTML. Okay great now erase the javascript and make it work. Ummmmmmmm.....

Right off the bat I had great difficulty figuring out how to make the javascript affect elements of the HTML and CSS. Even getting one piece of the code to work and just making it log a tracer bullet for clicking certain things was a big pain in the ass, and then we had plenty more to do. Eventually as we progressed, I could get the elements already on the page to work but still not be able to dynamically add things. But God comes through and eventually everything clicked when I realized that in order to get added tasks to work right the event listeners would need to be called at their adding. This was also when I realized that the initial code that added the event listeners stopped at the loading of the page and never ran again. lodash _.forEach would not cut it, so I wrapped each of my event listener adding chunks of code in functions and called them EVERY TIME I ADDED A TASK. It worked beautifully. If only I had figured this out earlier during the weekend I could have possibly accomplished a little more, but I was satisfied to have gotten it working to a fairly functional point.

The code to add the eventListeners:  
````javascript
	newTodoInput.addEventListener('keyup', function addTodoController(event){
		if ( event.keyCode === 13){
			if ( newTodoInput.value !== '' ){
				todos.addTaskToList(newTodoInput.value.trim(), todos.taskList);
				var clone = templateContent.cloneNode(true);
				clone.querySelector("label").appendChild(document.createTextNode(newTodoInput.value.trim())); //received from kind stranger on stack overflow
				clone.querySelector("input.edit").value = newTodoInput.value.trim();
				todoList.appendChild(clone);
				newTodoInput.value = '';
				deletingTasks();
				editingTasks();
				completingTasks();
			}
		}
	});
````
One of the function wraps:  
````javascript
	function deletingTasks() {
		var deleteTaskButtons = document.querySelectorAll('button.destroy');
		_.last(deleteTaskButtons).addEventListener('click', function removeLi(){
			//console.log(event.target.parentNode.parentNode.parentNode);
			event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
			todos.deleteTask(_.indexOf(deleteTaskButtons, event.target), todos.taskList);
		});
	}
````

How do I feel? Exhausted, this coding stuff is a major brain fryer. I find however, that as I let the material kind of simmer in my brain after being wrecked by it in class, it slowly integrates into my knowledge base, and it's a great feeling. I'm actually enjoying myself when I'm able to devote most of my time to coding and making it work, and if I didn't have a fiancee living at home with me driving me up the wall about this wedding I could be a hermit who codes for 12 hours a day. We did get our engagement photos taken on Sunday, over three hours that could have been devoted to making the todo application edit tasks, but it was nice regardless. Overall, I would say I'm happy.

SOOOO on week 2 I learned how to add event listeners non stupidly and work my way through HTML and CSS. I'm still shaky with templates in my HTML which is blocking my edit tasks, but I think my foundation is a little more solid. I did a quick warm up of CSS over the weekend and can't wait to dive into it in week 3.