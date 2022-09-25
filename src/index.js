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

    Dom.appendButton("showAddProject");
    activateListener("showAddProject");
  };

  const createTask = (title, description, dueDate, priority) => {
    let newTask = Task(title, description, dueDate, priority);
    let actualProject = State.getCurrentProject();
    actualProject.addTask(newTask);

    Dom.appendButton("showAddTask");
    activateListener("showAddTask");
  };

  const activateListener = (buttonClass) => {
    let element = document.querySelector("." + buttonClass);

    element.addEventListener("click", () => {Dom.showForm(buttonClass)});
    element.addEventListener("click", () => {Dom.removeButton(buttonClass)});
  };

  return {getProjects, createProject, createTask, activateListener};
})();

const Default = (() => {
  Controller.createProject("Default");
  Dom.appendButton("showAddTask");
  Controller.activateListener("showAddTask");
})();