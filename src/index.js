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

const Task = (name) => {
  let checked;

  const getName = () => name;
  const isChecked = () => checked;

  const toggleChecked = () => {
    checked = !checked;
  };

  return {getName, isChecked, toggleChecked};
};

const DOM = () => {
  const addTaskButton = document.querySelector("button.addTask");
  const addProjectButton = document.querySelector("button.addProject");

  return {};
};

const Controller = () => {
  const createProject = () => {

  };

  const createTask = () => {

  };

  return {createProject, createTask};
};