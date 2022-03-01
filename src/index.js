//Imports
import { 
    selectProjectId,
    selectedTaskID,
    taskContainer,
    selectedTask,
    taskDueDate,
    selectedTaskDiv,
    selectedProject,
    libraryFunctions,
    projectsList,
    selectTaskId,
    addProjectToLibrary,
    saveSelected,
    projectsListDiv,
    removeAllChildNodes,
    deleteStorageProject,
    deleteStorageTask,
    save,
    selectedProjectID,
    local_storage_key,
    deleteProjectButton,
    addTasktoProject,
    taskFunctions,
    local_storage_selected_key,
    local_storage_selected_task_key
} from './functions';

import './style.css';
import { format } from 'date-fns';

// Selectors
export const newProject = document.getElementById('form-input');
export const newTaskTitle = document.getElementById('task-form-title-input');
export const newTaskDescription = document.getElementById('task-form-description-input');
export const newTaskDueDate = document.getElementById('task-form-dueDate-input');
export const newTaskPriority = document.getElementById('task-form-priority-input');
export const newTaskNotes = document.getElementById('task-form-notes-input');
export const newTaskComplete = document.getElementById('task-form-complete-input');



//Class constructors


// //Preset input
//Creates elements for each project in the ProjectList array
libraryFunctions.renderProjectLibrary();
if (!selectedProject){
    console.log("did not select a project")
    
}else {
 taskFunctions.renderTasks();
}
// taskFunctions.renderTasks();

export const projectItemList = document.querySelectorAll (".project-item")


export const projectForm = document.getElementById("project-form");
projectForm.addEventListener('submit',e =>{
    e.preventDefault();
    addProjectToLibrary();
    newProject.value = "";
    save();
    libraryFunctions.renderProjectLibrary();

});


selectProjectId();
selectTaskId();


export const taskForm = document.getElementById("task-form")
taskForm.addEventListener("submit",e => {
    
    e.preventDefault();
    selectedProject = projectsList.find(project => {
        return project.ID === selectedProjectID
        
    })
    // newTaskDescription.value="";
    // console.log(selectedProject);
    addTasktoProject();            
    taskFunctions.renderTasks();

    newTaskDescription.value="";
    // console.log(projectsList);
    // console.log(localStorage);
})


deleteProjectButton.addEventListener ("click", e => {
    
    // deleteProjectFunction();

    
    let selectedDiv = document.querySelector('.selectedProject');
    // console.log(selectedDiv); 

    if (!selectedProjectID || selectedProjectID === '' || selectedProjectID === null) {
        alert ("You did not select a project to delete");
    } else {
    //removes project Div and removes project from projects List array and
    //removes from local storage
        console.log("delete");
        deleteStorageProject();
        selectedDiv.parentElement.removeChild(selectedDiv);
        localStorage.removeItem(local_storage_selected_key, selectedProjectID);
    };
});

let editButton = document.createElement("button");
taskContainer.appendChild(editButton);
editButton.classList.add("edit-task-button")
editButton.textContent="Edit";

export let editComplete = document.querySelector(".edit-task-complete");
export let editDescription = document.querySelector(".edit-task-description");
export let editDueDate = document.querySelector(".edit-task-due-date");
export let editPriority = document.querySelector(".edit-task-priority");
export let modalContainer = document.querySelector(".modal")

editButton.addEventListener('click', (e) => {
    modalContainer.style.display = "block";

    selectedTask = selectedProject.tasks.find(task=>{
        return task.ID === selectedTaskID;
    })

    console.log(selectedTask);
    console.log(selectedProject);

    if (selectedTask.ID === selectedTaskID){
        editDescription.value = selectedTask.description;
        
        
        editDueDate.value = format(Date.parse(selectedTask.dueDate), 'MM-dd-yyyy');
        console.log(selectedTask.dueDate);
        console.log(editDueDate.value);
        editPriority.value = selectedTask.priority

        if (selectedTask.complete){
            editComplete.checked = true;
        }else {
            editComplete.checked = false;
        }
    }

})


