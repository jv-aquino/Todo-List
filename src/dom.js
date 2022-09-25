import * as forms from "./forms";

const main = document.querySelector("main");
const projectsSection = document.querySelector("section.projects");

const refreshDom = (type, arr) => {
  if (type == "Project") {
    arr.forEach(Project => {
      if (!Project.isOnDom()) {
        Project.toggleOnDom();
        main.appendChild();
      }
    });
  }
  else if (type == "Task") {

  }
};

const switchProject = () => {};

const showForm = (buttonClass) => {
  (buttonClass == "showAddTask") ? main.appendChild(forms.createTaskForm()) 
  : projectsSection.appendChild(forms.createProjectForm());
};

const appendButton = (buttonClass) => {
  const button = document.createElement("button");
  const parent = (buttonClass == "showAddTask") ? main : projectsSection;
  const type = (buttonClass == "showAddTask") ? "Task" : "Project";

  button.innerHTML = '<button type="button" class="'+ buttonClass +'">Add '+type+' <span class="addSign pl-1">+</span></button>';

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
