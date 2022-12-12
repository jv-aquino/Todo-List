import * as Forms from "./forms";

const tasks = document.querySelector(".tasks");
const projects = document.querySelector(".projects");

const refreshDom = (type, arr) => {
  if (type == "Project") {
    arr.forEach(Project => {
      if (!Project.isOnDom()) {
        Project.toggleOnDom();
        tasks.appendChild();
      }
    });
  }
  else if (type == "Task") {

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
  refreshDom,
};
