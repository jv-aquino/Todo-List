(()=>{"use strict";const e=()=>{const e=document.createElement("button");return e.type="submit",e.classList.add("add"),e.textContent="Add",e},t=()=>{const e=document.createElement("button");return e.type="button",e.classList.add("cancel"),e.textContent="Cancel",e},n=e=>{const t=document.createElement("span");return t.classList.add("material-symbols-outlined"),t.classList.add(e),t.textContent="flag",t},o=document.querySelector("main"),d=document.querySelector("section.projects"),a=()=>{o.appendChild((()=>{const o=document.createElement("form");o.classList.add("taskForm");const d=document.createElement("input");d.type="text",d.placeholder="Task Title";const a=document.createElement("input");return a.type="text",a.placeholder="Task Description",o.appendChild(d),o.appendChild(a),[{label:"Very Low",color:"text-yellow-200"},{label:"Low",color:"text-yellow-300"},{label:"Medium",color:"text-yellow-500"},{label:"High",color:"text-red-600"},{label:"Very High",color:"text-red-700"}].forEach((e=>{const t=document.createElement("input");t.name="priority",t.type="radio",t.id=e.label;const d=document.createElement("label"),a=n(e.color).outerHTML;d.innerHTML=a+e.label,d.setAttribute("for",e.label),o.appendChild(d),o.appendChild(t)})),o.appendChild(e()),o.appendChild(t()),o})())},c=()=>{d.appendChild((()=>{const n=document.createElement("form");n.classList.add("projectForm");const o=document.createElement("input");return o.type="text",o.placeholder="Project Name",n.appendChild(o),n.appendChild(e()),n.appendChild(t()),n})())},s=()=>{const e=document.createElement("button");e.innerHTML='<button type="button" class="showAddTask">Add Task <span class="addSign pl-1">+</span></button>',o.appendChild(e)},l=()=>{document.querySelector("main button.showAddTask").remove()},r=()=>{document.querySelector("section button.showAddProject").remove()},i=(()=>{const e=[],t=e=>{let t=document.querySelector("."+e);switch(e){case"showAddProject":t.addEventListener("click",c),t.addEventListener("click",r);break;case"showAddTask":t.addEventListener("click",a),t.addEventListener("click",l)}};return{getProjects:()=>e,createProject:n=>{e.push((e=>{const t=[];return{addTask:e=>{t.push(e)},getName:()=>e,removeTask:e=>{TaskIndex=t.indexOf(e),-1!=TaskIndex&&t.splice(TaskIndex,1)},getTasks:()=>t}})(n)),(()=>{const e=document.createElement("button");e.innerHTML='<button type="button" class="showAddProject">Add Project <span class="addSign pl-1">+</span></button>',d.appendChild(e)})(),t("showAddProject")},createTask:(e,n,o,d)=>{s(),t("showAddTask")},activateListener:t}})();i.createProject("Default"),s(),i.activateListener("showAddTask")})();