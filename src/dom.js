import * as forms from "./forms";

const main = document.querySelector("main");
const projectsSection = document.querySelector("section.projects");

const showTaskForm = () => {
  main.appendChild(forms.createTaskForm());
};

const showProjectForm = () => {
  projectsSection.appendChild(forms.createProjectForm());
};

const refreshProjects = () => {};

const refreshTasks = () => {};

const appendAddTask = () => {
  const showAddTask = document.createElement("button");
  showAddTask.innerHTML = '<button type="button" class="showAddTask">Add Task <span class="addSign pl-1">+</span></button>';

  main.appendChild(showAddTask);
};
const appendAddProject = () => {
  const showAddProject = document.createElement("button");
  showAddProject.innerHTML = '<button type="button" class="showAddProject">Add Project <span class="addSign pl-1">+</span></button>';

  projectsSection.appendChild(showAddProject);
};

const removeAddTask = () => {
  const showAddTask = document.querySelector("main button.showAddTask");
  showAddTask.remove();
};

const removeAddProject = () => {
  const showAddProject = document.querySelector("section button.showAddProject");
  showAddProject.remove();
};

export {
  appendAddTask,
  appendAddProject,
  removeAddTask,
  removeAddProject,
  showTaskForm,
  showProjectForm,
};