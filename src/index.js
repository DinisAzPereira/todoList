// index.js (refatorado)

import { Project, Task } from './task.js';
import { addProjectToList, addTaskToList, wipeProjectContainer, addAllProjectToList } from './ui.js';
import { saveProjects, loadProjects } from './storage.js';
import "./styles.css";

const taskModal = document.getElementById('taskModal');
const addTaskButton = document.querySelector(".addTaskButton");
const submitButton = document.querySelector(".submitButton");
const addProjectButton = document.querySelector(".addProject");
const projectModal = document.getElementById("projectModal");
const submitButton2 = document.querySelector(".submitButton2");
const cancelTaskButton = document.getElementById("cancelTaskButton");
const cancelProjectButton = document.getElementById("cancelProjectButton");

let projects = loadProjects().map(projectData => {
  const project = new Project(projectData.title);
  project.tasks = projectData.tasks.map(taskData => new Task(taskData.title, taskData.description, taskData.duedate, taskData.priority));
  return project;
});

function openTaskModal() {
  taskModal.showModal();
}

function closeTaskModal() {
  taskModal.close();
}

function openProjectModal() {
  projectModal.showModal();
}

function closeProjectModal() {
  projectModal.close();
}

function addProject() {
  const projectNameInput = document.getElementById("projectName").value;
  const newProject = new Project(projectNameInput);
  projects.push(newProject);
  saveProjects(projects);
  addProjectToList(projectNameInput);
}

function addTask() {
  const taskTitle = document.getElementById("taskTitle").value;
  const taskDescription = document.getElementById("taskDescription").value;
  const taskDate = document.getElementById("taskDate").value;
  const priorityOption = document.getElementById("priorityOption").value;
  const projectTitle = addTaskButton.dataset.title;

  const project = projects.find(({ title }) => title === projectTitle);
  if (!project) return;

  const newTask = new Task(taskTitle, taskDescription, taskDate, priorityOption);
  console.log("new task", newTask)
  project.addTask(newTask);
  saveProjects(projects);

  addTaskToList(taskTitle);
}

addProjectButton.addEventListener("click", openProjectModal);
addTaskButton.addEventListener("click", openTaskModal);
submitButton.addEventListener("click", addTask);
submitButton2.addEventListener("click", addProject);
cancelTaskButton.addEventListener("click", closeTaskModal);
cancelProjectButton.addEventListener("click", closeProjectModal);

document.addEventListener("DOMContentLoaded", () => {
  wipeProjectContainer();
  addAllProjectToList();
});
