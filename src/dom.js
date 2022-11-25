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
  if (buttonClass == "showAddTask") {
    main.appendChild(forms.createTaskForm());
    const submitButton = document.querySelector("main ." + buttonClass);
  }
  else { 
    projectsSection.appendChild(forms.createProjectForm());
    const submitButton = document.querySelector("section ." + buttonClass);
  }
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
