
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

    
}