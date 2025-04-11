export const projects = [];




export class Task {
    constructor(title, description, duedate, priority) {
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
        this.createdAt = new Date(); // Data de criação
    }
    

    complete() {
        this.completed = true;
    }

    uncomplete() {
        this.completed = false;
    }

    getDetails() {
        return `${this.description} (${this.completed ? 'Concluída' : 'Pendente'}) - Criada em: ${this.createdAt.toLocaleString()}`;
    }

    changePriority(newPriority) {
        this.priority = newPriority;
    }
}


export class Project {
    
    constructor(title,) {
        this.title = title;
        this.tasks = [];
       
    }

    getProject() {
        return `${this.title}`;
    }

    addTask(task) {
        this.tasks.push(task); // Adiciona a tarefa ao array de tarefas
        return this.tasks;     // Retorna o array atualizado (opcional)
    }

    getTasks() {
        return this.tasks;
    }
    
}

    export function removeTask(projectTitle, taskTitle) {    
        
        
        const projectIndex = projects.find(({ title }) => title === projectTitle);     
        const task = projectIndex.tasks.find(({ title }) => title === taskTitle); 
        console.log("Aqui esta o task", task);   
        projectIndex.tasks.splice(task, 1);
        console.log("ve se foi removido", projects)
        return task;
    }


