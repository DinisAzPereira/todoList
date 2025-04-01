import { Task, Project, projects } from './task.js'; // Importa a classe Task e Project
import { addProjectToList, addTaskToList } from './ui.js';
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
  console.log("Aqui esta o teu projeto fresquinho: ", newProject);
  addProjectToList(projectNameInput);

  console.log("aqui estao os projetos", projects )

}


function addTask () {
  const taskTitle = document.getElementById("taskTitle").value;
  const taskDescription = document.getElementById("taskDescription").value;
  const taskDate = document.getElementById("taskDate").value;
  const priorityOption = document.getElementById("priorityOption").value;

  const newTask = new Task(taskTitle, taskDescription, taskDate, priorityOption); 
  addTaskToList(taskTitle);
  console.log(newTask);

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