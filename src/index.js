import * as Dom from "./dom";

const Project = (name) => {
  const tasks = [];
  const getTasks = () => tasks;

  const addTask = (Task) => {
    tasks.push(Task);
  }
  const removeTask = (Task) => {
    TaskIndex = tasks.indexOf(Task);

    if (TaskIndex != -1) { // If the task index is valid (!= -1) ...
      tasks.splice(TaskIndex, 1) // Removes Task
    }
  }

  const getName = () => name;

  let onDom = false;
  const isOnDom = () => onDom;
  const toggleOnDom = () => {
    onDom = !onDom;
  };

  return {addTask, getName, removeTask, getTasks, isOnDom, toggleOnDom};
};

const Task = (title, description, dueDate, priority) => {
  let checked = false;

  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;

  const isChecked = () => checked;

  const toggleChecked = () => {
    checked = !checked;
  };

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    isChecked,
    toggleChecked,
  };
};

const Info = (() => {
  let currentProject;  
  const getCurrentProject = () => currentProject;

  const setCurrentProject = (project) => {
    currentProject = project;
  };

  return {setCurrentProject, getCurrentProject};
})();

const Controller = (() => {
  const projects = [];
  const getProjects = () => projects;

  const createProject = (projectName) => {
    projects.push(Project(projectName));

    Dom.appendButton("showAddProject");
    activateListener("showAddProject");
  };

  const createTask = () => {
    let newTask = Task(title, description, dueDate, priority);
    let actualProject = Info.getCurrentProject();
    actualProject.addTask(newTask);

    Dom.appendButton("showAddTask");
    activateListener("showAddTask");
  };

  const activateListener = (buttonClass) => {
    if (!(buttonClass.includes("show"))) {
      const addButton = document.querySelector(buttonClass + " .add");
      addButton.addEventListener("click", () => {
        (buttonClass == "main") ? Controller.createTask() : Controller.createProject();
      });
      return 0;
    }
    
    let element = document.querySelector("." + buttonClass);

    element.addEventListener("click", () => {
      Dom.showForm(buttonClass);
      Dom.removeButton(buttonClass)

      const addDiv = (buttonClass == "showAddTask") ? "main" : "section";
      activateListener(addDiv);
    });
  };

  return {getProjects, createProject, createTask, activateListener};
})();

const Default = (() => {
  Controller.createProject("Default");
  Dom.appendButton("showAddTask");
  Controller.activateListener("showAddTask");
})();