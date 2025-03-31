import { Task, Project } from './task.js'; // Importa a classe Task e Project

const taskModal = document.getElementById('taskModal');
const addTaskButton = document.querySelector(".addTaskButton")
const submitButton = document.querySelector(".submitButton");
const addProjectButton = document.querySelector(".addProject");
const projectModal = document.getElementById("projectModal");
const submitButton2 = document.querySelector(".submitButton2");

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

// Adiciona evento de clique ao botão "Adicionar Projeto"
addProjectButton.addEventListener("click", () => {
  openProjectModal();
});

addTaskButton.addEventListener("click", () => {
    openTaskModal();
  });

  function addProject () {
    const projectNameInput = document.getElementById("projectName").value;

    const newProject = new Project(projectNameInput)

    console.log("Aqui esta o teu projeto fresquinho: ", newProject);

  }

  
  function addTask () {
    const taskTitle = document.getElementById("taskTitle").value;
    const taskDescription = document.getElementById("taskDescription").value;
    const taskDate = document.getElementById("taskDate").value;
    const priorityOption = document.getElementById("priorityOption").value;

    const newTask = new Task(taskTitle, taskDescription, taskDate, priorityOption); 

    console.log(newTask);



}

submitButton.addEventListener("click", () => {

  addTask();
})

submitButton2.addEventListener("click", () => {

  addProject();
})




  
