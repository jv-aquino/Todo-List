const Utilities = (() => {
  const createAddButton = () => {
    const addButton = document.createElement("button");
    addButton.type = "submit";
    addButton.classList.add("add");
    addButton.textContent = "Add";

    return addButton;
  };

  const createCancelButton = () => {
    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.classList.add("cancel");
    cancelButton.textContent = "Cancel";

    return cancelButton;
  };

  const createFlagSpan = (colorClass) => {
    const span = document.createElement("span");
    span.classList.add("material-symbols-outlined");
    span.classList.add(colorClass);
    span.textContent = "flag";
    
    return span;
  }

  return {createAddButton, createCancelButton, createFlagSpan};
})();

const createProjectForm = () => {
  const form = document.createElement("form");
  form.classList.add("projectForm");

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Project Name";

  form.appendChild(nameInput);
  form.appendChild(Utilities.createAddButton());
  form.appendChild(Utilities.createCancelButton());

  return form;
};

const createTaskForm = () => {
  const form = document.createElement("form");
  form.classList.add("taskForm");
  
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.placeholder = "Task Title";

  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.placeholder = "Task Description";

  form.appendChild(titleInput);
  form.appendChild(descriptionInput);

  const priorities = [{"label": 'Very Low', "color": "text-yellow-200"}, 
  {"label": 'Low', "color": "text-yellow-300"}, 
  {"label": 'Medium', "color": "text-yellow-500"}, 
  {"label": 'High', "color": "text-red-600"}, 
  {"label": 'Very High', "color": "text-red-700"}];

  priorities.forEach(prority => {
    const input = document.createElement("input");
    input.name = "priority";
    input.type = "radio";
    input.id = prority.label;

    const label = document.createElement("label");
    const span = Utilities.createFlagSpan(prority.color).outerHTML;
    label.innerHTML = span + prority.label
    label.setAttribute('for', prority.label);

    form.appendChild(label);
    form.appendChild(input);
  });

  form.appendChild(Utilities.createAddButton());
  form.appendChild(Utilities.createCancelButton());

  return form;
}

export {createProjectForm, createTaskForm};