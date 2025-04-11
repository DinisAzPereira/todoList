
import {projects, removeTask } from './task.js'; // Importa a classe Task e Project

const taskList = document.querySelector(".taskList");


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

export function addTaskToList(title){

    const editTaskModal = document.getElementById("editTaskModal");
    const taskList = document.querySelector(".taskList");
    const addTaskButton = document.querySelector(".addTaskButton")


        const taskItem = document.createElement("div");
        taskItem.classList.add("taskItem")
        const projectTitle = addTaskButton.dataset.title;
        const taskTitleValue = taskItem.dataset.title;


        const taskTitle = document.createElement("h1");
        taskTitle.textContent = title;
        taskItem.dataset.title = title; 

        const rightElements = document.createElement("div");
        rightElements.classList.add("rightElements");

        const selectElement = document.createElement('select');
        selectElement.id = 'completeOptions'; // Define o ID do elemento
        selectElement.name = 'opcoes'; 

        const changeDetails = document.createElement("button");
        changeDetails.textContent = "change details"
        changeDetails.classList.add("confirmChangeDetailsButton");
        changeDetails.addEventListener("click", () => {
            editTaskModal.showModal();
          });


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
    rightElements.appendChild(changeDetails);
    selectElement.appendChild(option1);
    selectElement.appendChild(option2);
    rightElements.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
    

        console.log("Aqui esta o taskTitle", taskTitle);
        removeTask(projectTitle, taskTitleValue);
        taskItem.remove();
        
      
      })

      
      changeDetails.addEventListener("click", () => {

        const projectIndex = projects.find(({ title }) => title === projectTitle);     
        const task = projectIndex.tasks.find(({ title }) => title === taskTitleValue); 
        
        console.log("Aqui esta o task", task);
        //preencherEditModal(task);     
          
        
      
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