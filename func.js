function addTask() {
   var taskInput = document.getElementById("Task");
   var taskText = taskInput.value.trim();

   if (taskText !== "") {
      var taskList = document.getElementById("taskList");
      var newTask = document.createElement("li");

      newTask.textContent = taskText;
      newTask.addEventListener("click", function(){
         this.parentNode.removeChild(this)
      });
      taskList.appendChild(newTask);
      taskInput.value = "";
   }
}


function clearAll() {
   var taskList = document.getElementById("taskList");
   while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
   }
}