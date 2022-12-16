import * as Forms from "./forms";

const projects = document.querySelector(".projects");
const tasks = document.querySelector(".tasks");

const createProject = (project) => {
  const nome = document.createElement("h3");
  nome.textContent = project.getName();

  projects.insertBefore(nome, projects.lastChild);
}

const refresh = (type, arr) => {
  if (type == "Projects") {
    arr.forEach(project => {
      if (!project.isOnDom()) {
        project.toggleOnDom();
        createProject(project);
      }
    });
  }
  else if (type == "Tasks") {

  }
};

const switchProject = () => {};

const showForm = (buttonClass) => {
  if (buttonClass == "showAddTask") {
    tasks.appendChild(Forms.createTaskForm());
    const submitButton = document.querySelector(".tasks ." + buttonClass);
  }
  else { 
    projects.appendChild(Forms.createProjectForm());
    const submitButton = document.querySelector(".projects ." + buttonClass);
  }
};

const appendButton = (buttonClass) => {
  const button = document.createElement("button");
  button.classList.add(buttonClass);
  
  const parent = (buttonClass == "showAddTask") ? tasks : projects;
  const type = (buttonClass == "showAddTask") ? "Task" : "Project";

  button.innerHTML = 'Add '+ type +' <span class="pl-1">+</span>';

  parent.appendChild(button);
};

const removeButton = (buttonClass) => {
  const element = document.querySelector("button." + buttonClass);
  element.remove();
};

export {
  appendButton,
  removeButton,
  showForm,
  switchProject,
  refresh,
};
