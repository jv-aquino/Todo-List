import * as forms from "./forms";

const Project = (name) => {
  const tasks = [];

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

  return {addTask, getName, removeTask};
};

const Task = (title, description, dueDate, priority) => {
  let checked;

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

const Dom = (() => {
  const showTaskForm = () => {
    const main = document.querySelector("main");
    main.appendChild(forms.createTaskForm());

  };

  const showProjectForm = () => {
    const projectsSection = document.querySelector("section.projects");
    projectsSection.appendChild(forms.createProjectForm());

  };

  const refreshProjects = () => {

  };

  const refreshTasks = () => {

  };

  return {showTaskForm, showProjectForm};
})();

const Controller = (() => {
  const projects = [];

  const createProject = (title) => {
    projects.push(Project(title));
  };

  const createTask = () => {
    
  };

  return {createProject, createTask};
})();

const Interface = (() => {
  const showAddTask = document.querySelector("button.showAddTask");
  showAddTask.addEventListener("click", Dom.showTaskForm);

  const showAddProject = document.querySelector("button.showAddProject");
  showAddProject.addEventListener("click", Dom.showProjectForm);

  const removeAddTask = () => {
    
  };

  const removeAddProject = () => {
    
  };

  return {removeAddTask, removeAddProject};
})();