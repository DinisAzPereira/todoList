export function addProjectToList(title){
    const projectList = document.querySelector(".projectList");
    const projectName = document.createElement("button");
    const addTaskButton = document.querySelector(".addTaskButton");

    addTaskButton.dataset.title = title;
    projectName.textContent = title;
    projectList.appendChild(projectName);


}

export function addTaskToList(title){
        const taskList = document.querySelector(".taskList");

        const taskItem = document.createElement("div");
        taskItem.classList.add("taskItem")

        const taskTitle = document.createElement("h1");
        taskTitle.textContent = title;

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

    taskList.appendChild(taskItem);
    taskItem.appendChild(taskTitle);
    taskItem.appendChild(rightElements);
    rightElements.appendChild(selectElement);

    selectElement.appendChild(option1);
    selectElement.appendChild(option2);
    rightElements.appendChild(deleteButton);





}

