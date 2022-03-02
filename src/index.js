//Imports
import { 
    selectProjectId,
    selectedTaskID,
    taskContainer,
    selectedTask,
    tasksListDiv,
    selectedProject,
    libraryFunctions,
    projectsList,
    selectTaskId,
    addProjectToLibrary,
    removeAllChildNodes,
    deleteStorageProject,
    save,
    selectedProjectID,
    deleteProjectButton,
    addTasktoProject,
    taskFunctions,
    local_storage_selected_key
} from './functions';
import './style.css';
import { format } from 'date-fns';

// Export Selectors
export const newProject = document.getElementById('form-input');
export const newTaskTitle = document.getElementById('task-form-title-input');
export const newTaskDescription = document.getElementById('task-form-description-input');

export const projectForm = document.getElementById("project-form");
export const taskForm = document.getElementById("task-form")

export let editComplete = document.querySelector(".edit-task-complete");
export let editDescription = document.querySelector(".edit-task-description");
export let editDueDate = document.querySelector(".edit-task-due-date");
export let editPriority = document.querySelector(".edit-task-priority");


//Index.JS Selectors
let modalContainer = document.querySelector(".modal")
let editButton = document.createElement("button");


const saveButton = document.querySelector(".save-task-edits-btn")
const closeButton = document.querySelector(".close-edit-task-btn")

//Creates elements for each project in the ProjectList array
libraryFunctions.renderProjectLibrary();
if (!selectedProject){
    console.log("Select a project")
}else {
 taskFunctions.renderTasks();
}

projectForm.addEventListener('submit',e =>{
    e.preventDefault();
    addProjectToLibrary();
    newProject.value = "";
    save();
    libraryFunctions.renderProjectLibrary();
});

selectProjectId();
selectTaskId();

taskForm.addEventListener("submit",e => { 
    e.preventDefault();
    selectedProject = projectsList.find(project => {
        return project.ID === selectedProjectID      
    })
    addTasktoProject();            
    taskFunctions.renderTasks();
    newTaskDescription.value="";
})

deleteProjectButton.addEventListener ("click", e => {
    if (!selectedProjectID || selectedProjectID === '' || selectedProjectID === null) {
        alert ("You did not select a project to delete");
    } else {
        let selectedDiv = document.querySelector('.selectedProject');
        deleteStorageProject();
        selectedDiv.parentElement.removeChild(selectedDiv);
        localStorage.removeItem(local_storage_selected_key, selectedProjectID);
    };
});

taskContainer.appendChild(editButton);
editButton.classList.add("edit-task-button")
editButton.textContent="Edit";

editButton.addEventListener('click', (e) => {
    selectedTask = selectedProject.tasks.find(task=>{
        return task.ID === selectedTaskID;
    })

    if(!selectedTaskID){
        alert("Select a Task");
    }else {
        modalContainer.style.display = "block";
        if (selectedTask.ID === selectedTaskID){
            editDescription.value = selectedTask.description;
            editDueDate.value = format(Date.parse(selectedTask.dueDate), 'yyyy-MM-dd');
            editPriority.value = selectedTask.priority
            if (selectedTask.complete){
                editComplete.checked = true;
            }else {
                editComplete.checked = false;
            }
        }
    }
})

saveButton.addEventListener('click', (e) =>{
    selectedTask.complete = editComplete.checked;
    selectedTask.description = editDescription.value;
    selectedTask.priority = editPriority.value;

    Date.prototype.addDays = function (days) {
        const date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    };
    const date = new Date(editDueDate.value);
    date.addDays(1);
    selectedTask.dueDate = format(Date.parse(date.addDays(1)), 'MM-dd-yyyy');

    save()
    removeAllChildNodes(tasksListDiv);
    taskFunctions.renderTasks();
    modalContainer.style.display = "none";
})

closeButton.addEventListener('click', (e) =>{
    modalContainer.style.display = "none";
})


