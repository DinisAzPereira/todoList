
import {projects, removeTask } from './task.js'; // Importa a classe Task e Project


const taskList = document.querySelector(".taskList");
const projectList = document.querySelector(".projectList");


function preencherEditModal(task) {
    document.getElementById("editTaskTitle").value = task.title;
    document.getElementById("editTaskDescription").value = task.description;
    document.getElementById("editTaskDate").value = task.duedate;
    document.getElementById("editTaskPriority").value = task.priority;
  }

  

export function addProjectToList(title){
    const projectList = document.querySelector(".projectList");
    const projectName = document.createElement("button");
    const addTaskButton = document.querySelector(".addTaskButton");

    addTaskButton.dataset.title = title;
    projectName.textContent = title;
    projectName.classList.add("projectNameButton");
    
    projectList.appendChild(projectName);
    projectName.addEventListener("click", () => {
        addTaskButton.dataset.title = title;
        wipeTaskContainer()
       addAllProjectTasks(title);

      })
      

}

export function wipeTaskContainer() {
    taskList.innerHTML= "";  
}
export function wipeProjectContainer() {
  projectList.innerHTML= "";  
}

export function addTaskToList(title){

        const editTaskModal = document.getElementById("editTaskModal");
        const taskList = document.querySelector(".taskList");
        const addTaskButton = document.querySelector(".addTaskButton")


        const taskItem = document.createElement("div");
        taskItem.classList.add("taskItem")
        const projectTitle = addTaskButton.dataset.title;

        const taskTitle = document.createElement("h1");
        taskTitle.textContent = title;
        taskItem.dataset.title = title; 
        const taskTitleValue = taskItem.dataset.title;

        const rightElements = document.createElement("div");
        rightElements.classList.add("rightElements");

        const selectElement = document.createElement('select');
        selectElement.id = 'completeOptions'; // Define o ID do elemento
        selectElement.name = 'opcoes'; 

        const confirmChangeDetailsButton = document.createElement("button");
        confirmChangeDetailsButton.textContent = "change details"
        confirmChangeDetailsButton.classList.add("confirmChangeDetailsButton");

       


        const option1 = document.createElement('option');
        option1.value = 'Complete';           // Define o valor da opção
        option1.textContent = 'Completa';     // Define o texto visível da opção

        const option2 = document.createElement('option');
        option2.value = 'Incomplete';         // Define o valor da opção
        option2.textContent = 'Incompleta'; 

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "delete"
        deleteButton.classList.add("deleteTaskButton");

    taskList.appendChild(taskItem);
    taskItem.appendChild(taskTitle);
    taskItem.appendChild(rightElements);
    rightElements.appendChild(selectElement);
    rightElements.appendChild(confirmChangeDetailsButton);
    selectElement.appendChild(option1);
    selectElement.appendChild(option2);
    rightElements.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
    

        console.log("Aqui esta o taskTitle", taskTitle);
        removeTask(projectTitle, taskTitleValue);
        taskItem.remove();
        
      
      })

      const changeDetailsButton2 = document.querySelector(".changeDetailsButton");

      const projectIndex = projects.find(({ title }) => title === projectTitle);     
      const task = projectIndex.tasks.find(({ title }) => title === taskTitleValue); 

      confirmChangeDetailsButton.addEventListener("click", () => {
       

        editTaskModal.showModal();
        console.log("Aqui esta o task", task);
        preencherEditModal(task);     
                
      })
      changeDetailsButton2.addEventListener("click", () => {
       

        const taskTitle = document.getElementById("editTaskTitle").value;
        const taskDescription = document.getElementById("editTaskDescription").value;
        const taskDate = document.getElementById("editTaskDate").value;
        const priorityOption = document.getElementById("editTaskPriority").value;

        task.updateTask(taskTitle, taskDescription, taskDate, priorityOption);
        taskItem.remove();
        addTaskToList(task.title);
        editTaskModal.close(); 
        console.log("Aqui esta o task", task);
                
      })


}


function addAllProjectTasks(projectTitle) {


  
    const result = projects.find(({ title }) => title === projectTitle); 

    if (result) {
        result.tasks.forEach(item => {
            addTaskToList(item.title)
                });

                console.log("check aqui os projects", projects)



}


}


export function addAllProjectToList(){
      const allProjects = localStorage.getItem('projects');
      const parsedProjects = JSON.parse(allProjects); // Converte a string JSON de volta para um objeto JavaScript
      parsedProjects.forEach(item => {
        const projectName = item.title;
        addProjectToList(projectName);
      })
    
  }
