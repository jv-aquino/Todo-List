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

  return {addTask, getName, removeTask, getTasks};
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

const State = (() => {
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

  const createProject = (name) => {
    projects.push(Project(name));

    Dom.appendAddProject();
    activateListener("showAddProject");
  };

  const createTask = (title, description, dueDate, priority) => {
    /*
    let newTask = Task(title, description, dueDate, priority);
    let actualProject = State.getCurrentProject(); // Logic to find the project
    actualProject.addTask(newTask);
    */

    Dom.appendAddTask();
    activateListener("showAddTask");
  };

  const activateListener = (buttonClass) => {
    let element = document.querySelector("." + buttonClass);

    switch (buttonClass) {
      case "showAddProject":
        element.addEventListener("click", Dom.showProjectForm);
        element.addEventListener("click", Dom.removeAddProject);
        break;

      case "showAddTask":
        element.addEventListener("click", Dom.showTaskForm);
        element.addEventListener("click", Dom.removeAddTask);
        break;
      
      default:
        break;
    }
  };

  return {getProjects, createProject, createTask, activateListener};
})();

const Default = (() => {
  Controller.createProject("Default");
  Dom.appendAddTask();
  Controller.activateListener("showAddTask");
})();