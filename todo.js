// Load tasks on page load
document.addEventListener('DOMContentLoaded', loadTasks);

const bt1 = document.getElementById("addTask");
const btRest = document.getElementById("reset");
const Task= document.getElementById("task");
const taskList=document.getElementById("taskList");

bt1.addEventListener('click',addTask);
btRest.addEventListener('click',removeAllTask);

function addTask(){
  if(Task.value!==""){  
    if (localStorage.length<=5){
        const taskID=Date.now();
       
    const taskItem = document.createElement('li');
    taskItem.id= taskID;
    taskItem.innerHTML=`
    <label for="${taskID}">${Task.value}</label>
    <button onclick="removeTask('${taskID}')">Delete</button>
    </li>
    `
    taskList.append(taskItem);
   
    localStorage.setItem(taskID, Task.value);
    Task.value='';
    }
    else{
    alert("Can only Add 6 Taskss, Kitna Kaam Karlogeee beee");}
  }
  else{
    return NaN;
  }
}

// Function to delete a task
function removeTask(taskID) {
    const dItem = document.getElementById(taskID);
    dItem.remove();
    localStorage.removeItem(taskID);
}
function loadTasks(){
    for (let i = 0; i < localStorage.length; i++) {
        const taskId = localStorage.key(i);
        const taskData = localStorage.getItem(taskId);
        const taskItem = document.createElement('li');
        taskItem.id=taskId;
        taskItem.innerHTML=`
       
        <label for="${taskId}">${taskData}</label>
        <button onclick="removeTask('${taskId}')">Delete</button>
        </li>
        `;
 
        taskList.append(taskItem);
    }

}

function removeAllTask(){
    localStorage.clear();
    taskList.innerHTML="";
    taskList.innerHTML=`<p style="background:green;padding:10px;text-align: center;">LIST OF YOUR DAILY FAV TASKS</li>`;
}
