

const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


function addTask() {

    const taskText = taskInput.value.trim();

  
    if (taskText !== '') {
      
        const li = document.createElement('li');
        li.textContent = taskText;

        li.addEventListener('click', function() {
            this.classList.toggle('completed');
        });

      
        taskList.appendChild(li);

      
        taskInput.value = '';
    }
}


function removeTask() {
  
    const tasks = taskList.getElementsByTagName('li');

   
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].classList.contains('completed')) {
         
            tasks[i].remove();
        }
    }
}


  