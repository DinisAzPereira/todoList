import { saveProjects, loadProjects } from './storage.js';
import { Task } from './task.js';

const taskList = document.querySelector(".taskList");
const projectList = document.querySelector(".projectList");
const editTaskModal = document.getElementById("editTaskModal");


function preencherEditModal(task) {
    document.getElementById("editTaskTitle").value = task.title;
    document.getElementById("editTaskDescription").value = task.description;
    document.getElementById("editTaskDate").value = task.duedate;
    document.getElementById("editTaskPriority").value = task.priority;
  }

  

export function addProjectToList(title){
    const button = document.createElement("button");
    const addTaskButton = document.querySelector(".addTaskButton");

button.textContent = title;
button.classList.add("projectNameButton");
    button.addEventListener("click", () => {
        addTaskButton.dataset.title = title;
        wipeTaskContainer()
       addAllProjectTasks(title);

      })
      
      projectList.appendChild(button);

}

export function wipeTaskContainer() {
    taskList.innerHTML= "";  
}
export function wipeProjectContainer() {
  projectList.innerHTML= "";  
}

export function addTaskToList(title){

  const addTaskButton = document.querySelector(".addTaskButton");

  const projectTitle = addTaskButton.dataset.title;
  const projects = loadProjects();


  const project = projects.find(p => p.title === projectTitle);
  if (!project) return;


  const task = project.tasks.find(t => t.title === taskTitle);
  if (!task) return;

  const taskItem = document.createElement("div");
    taskItem.classList.add("taskItem");

    const titleElement = document.createElement("h1");
    titleElement.textContent = task.title;

    const rightElements = document.createElement("div");
    rightElements.classList.add("rightElements");

    const select = document.createElement("select");
    select.innerHTML = `
        <option value="Complete">Completa</option>
        <option value="Incomplete">Incompleta</option>
    `;

    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Alterar Detalhes";
    confirmButton.classList.add("confirmChangeDetailsButton");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteTaskButton");

    deleteButton.addEventListener("click", () => {
        project.tasks = project.tasks.filter(t => t.title !== task.title);
        saveProjects(projects);
        taskItem.remove();
    });

    confirmButton.addEventListener("click", () => {
        preencherEditModal(task);
        editTaskModal.showModal();

        const changeButton = document.querySelector(".changeDetailsButton");
        changeButton.onclick = () => {
            task.title = document.getElementById("editTaskTitle").value;
            task.description = document.getElementById("editTaskDescription").value;
            task.duedate = document.getElementById("editTaskDate").value;
            task.priority = document.getElementById("editTaskPriority").value;

            saveProjects(projects);
            editTaskModal.close();
            wipeTaskContainer();
            addAllProjectTasks(projectTitle);
        };
    });

    rightElements.appendChild(select);
    rightElements.appendChild(confirmButton);
    rightElements.appendChild(deleteButton);

    taskItem.appendChild(titleElement);
    taskItem.appendChild(rightElements);
    taskList.appendChild(taskItem);
}


  //       const editTaskModal = document.getElementById("editTaskModal");
  //       const taskList = document.querySelector(".taskList");
  //       const addTaskButton = document.querySelector(".addTaskButton")


  //       const taskItem = document.createElement("div");
  //       taskItem.classList.add("taskItem")
  //       const projectTitle = addTaskButton.dataset.title;

  //       const taskTitle = document.createElement("h1");
  //       taskTitle.textContent = title;
  //       taskItem.dataset.title = title; 
  //       const taskTitleValue = taskItem.dataset.title;

  //       const rightElements = document.createElement("div");
  //       rightElements.classList.add("rightElements");

  //       const selectElement = document.createElement('select');
  //       selectElement.id = 'completeOptions'; // Define o ID do elemento
  //       selectElement.name = 'opcoes'; 

  //       const confirmChangeDetailsButton = document.createElement("button");
  //       confirmChangeDetailsButton.textContent = "change details"
  //       confirmChangeDetailsButton.classList.add("confirmChangeDetailsButton");

       


  //       const option1 = document.createElement('option');
  //       option1.value = 'Complete';           // Define o valor da opção
  //       option1.textContent = 'Completa';     // Define o texto visível da opção

  //       const option2 = document.createElement('option');
  //       option2.value = 'Incomplete';         // Define o valor da opção
  //       option2.textContent = 'Incompleta'; 

  //       const deleteButton = document.createElement("button");
  //       deleteButton.textContent = "delete"
  //       deleteButton.classList.add("deleteTaskButton");

  //   taskList.appendChild(taskItem);
  //   taskItem.appendChild(taskTitle);
  //   taskItem.appendChild(rightElements);
  //   rightElements.appendChild(selectElement);
  //   rightElements.appendChild(confirmChangeDetailsButton);
  //   selectElement.appendChild(option1);
  //   selectElement.appendChild(option2);
  //   rightElements.appendChild(deleteButton);

  //   deleteButton.addEventListener("click", () => {
    

  //       console.log("Aqui esta o taskTitle", taskTitle);
  //       removeTask(projectTitle, taskTitleValue);
  //       taskItem.remove();
        
      
  //     })

  //     const changeDetailsButton2 = document.querySelector(".changeDetailsButton");
  //     const allProjects = JSON.parse(localStorage.getItem('projects')) ;

  //     console.log("Aqui esta o allProjects", allProjects)

  //     const projectIndex = Object.values(allProjects).find(({ title }) => title === projectTitle);
  //  //   const task = Object.values(projectIndex).find(({ title }) => title === taskTitleValue); 
  //     const task = projectIndex.tasks.find(({ title }) => title === taskTitleValue);

  //     confirmChangeDetailsButton.addEventListener("click", () => {
       

  //       editTaskModal.showModal();
  //       console.log("Aqui esta o task", task);
  //       preencherEditModal(task);     
                
  //     })
  //     changeDetailsButton2.addEventListener("click", () => {
       

  //       const taskTitle = document.getElementById("editTaskTitle").value;
  //       const taskDescription = document.getElementById("editTaskDescription").value;
  //       const taskDate = document.getElementById("editTaskDate").value;
  //       const priorityOption = document.getElementById("editTaskPriority").value;

  //       updateTask(task, taskTitle, taskDescription, taskDate, priorityOption);
  //       localStorage.setItem('projects', JSON.stringify(parsedProjects));
        
  //               taskItem.remove();
              
  //       addTaskToList(task.title);
  //       editTaskModal.close(); 
  //       console.log("Aqui esta o task", task);
                
  //     })


//}

function addAllProjectTasks(projectTitle) {
  const projects = loadProjects();
  const project = projects.find(p => p.title === projectTitle);
  if (project) {
      project.tasks.forEach(task => addTaskToList(task.title));
  }


}


export function addAllProjectToList(){
  const projects = loadProjects();
  projects.forEach(project => addProjectToList(project.title));
    
  }