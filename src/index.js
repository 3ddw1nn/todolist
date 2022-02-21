//Imports
import { 
    selectProjectId,
    selectedProject,
    libraryFunctions,
    projectsList,
    addProjectToLibrary,
    saveSelected,
    projectsListDiv,
    removeAllChildNodes,
    deleteStorageProject,
    save,
    selectedProjectID,
    local_storage_key,
    deleteProjectButton,
    addTasktoProject,
    taskFunctions,
    local_storage_selected_key
} from './functions';

import './style.css';

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


export const taskForm = document.getElementById("task-form")
taskForm.addEventListener("submit",e => {
    e.preventDefault();
    selectedProject = projectsList.find(project => {
        return project.ID === selectedProjectID
        
    })
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
   

    // console.log(localStorage);
    // for (let i = 0; i < localStorage.length; i++){
    //     localStorage.getItem('projectslist');
    //     libraryFunctions.renderProjectLibrary();
    //     }
});


// console.log(selectedProjectID)  ;


// });










