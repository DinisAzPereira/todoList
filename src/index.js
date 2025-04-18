import { Task, Project, projects, removeTask   } from './task.js'; // Importa a classe Task e Project
import { addProjectToList, addTaskToList, wipeProjectContainer, addAllProjectToList } from './ui.js';
import "./styles.css";

const taskModal = document.getElementById('taskModal');
const addTaskButton = document.querySelector(".addTaskButton")
const submitButton = document.querySelector(".submitButton");
const addProjectButton = document.querySelector(".addProject");
const projectModal = document.getElementById("projectModal");
const submitButton2 = document.querySelector(".submitButton2");
const cancelTaskButton = document.getElementById("cancelTaskButton");
const cancelProjectButton = document.getElementById("cancelProjectButton");



// Função para abrir o modal

function openTaskModal() {
  taskModal.showModal();
}

// Função para fechar o modal
function closeTaskModal() {
  taskModal.close();
}

function openProjectModal() {
  projectModal.showModal();
}

// Função para fechar o modal de projeto
function closeProjectModal() {
  projectModal.close();
}


function addProject () {
  const projectNameInput = document.getElementById("projectName").value;

  const newProject = new Project(projectNameInput)
  projects.push(newProject); 
  localStorage.setItem('projects', JSON.stringify(projects));     

  console.log("Aqui esta o teu projeto fresquinho: ", newProject);
  addProjectToList(projectNameInput);

  console.log("aqui estao os projetos", projects )

}


function addTask () {
  const taskTitle = document.getElementById("taskTitle").value;
  const taskDescription = document.getElementById("taskDescription").value;
  const taskDate = document.getElementById("taskDate").value;
  const priorityOption = document.getElementById("priorityOption").value;
  const addTaskButtonValue = addTaskButton.dataset.title;


  const result = projects.find(({ title }) => title === addTaskButtonValue);
    
  console.log("Aqui esta o result", result)
  console.log("Aqui esta o taskButtonValue", addTaskButtonValue); 

  const newTask = new Task(taskTitle, taskDescription, taskDate, priorityOption); 
  result.addTask(newTask);
  addTaskToList(taskTitle); // ui
  console.log(newTask);
  console.log("aqui esta o resultado", result)

}

//  "Adicionar Projeto"
addProjectButton.addEventListener("click", () => {
  openProjectModal();
});

//  "Adicionar Tarefa"

addTaskButton.addEventListener("click", () => {
    openTaskModal();
  });

  // botao para confirmar tarefa
submitButton.addEventListener("click", () => {

  addTask();
})

  // botao para confirmar projeto

submitButton2.addEventListener("click", () => {

  addProject();
})

  
cancelTaskButton.addEventListener("click", () => {
    closeTaskModal();
})

cancelProjectButton.addEventListener("click", () => {
  closeProjectModal();
})

document.addEventListener("DOMContentLoaded", (event) => {
  wipeProjectContainer()
  addAllProjectToList();
});
