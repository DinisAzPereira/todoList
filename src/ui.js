
import {projects, removeTask } from './task.js'; // Importa a classe Task e Project

const taskList = document.querySelector(".taskList");

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
    const addTaskButton = document.querySelector(".addTaskButton")


        const taskItem = document.createElement("div");
        taskItem.classList.add("taskItem")

        const taskTitle = document.createElement("h1");
        taskTitle.textContent = title;
        taskItem.dataset.title = title; 

        const rightElements = document.createElement("div");
        rightElements.classList.add("rightElements");

        const selectElement = document.createElement('select');
        selectElement.id = 'completeOptions'; // Define o ID do elemento
        selectElement.name = 'opcoes'; 

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

    selectElement.appendChild(option1);
    selectElement.appendChild(option2);
    rightElements.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
    
        const projectTitle = addTaskButton.dataset.title;

        const taskTitle = taskItem.dataset.title;
        console.log("Aqui esta o taskTitle", taskTitle);
        removeTask(projectTitle, taskTitle);
        
      
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