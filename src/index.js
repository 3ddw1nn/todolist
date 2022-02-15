//Imports
import { libraryFunctions, projectsList, addProjectToLibrary, saveSelected,
     save, local_storage_key, deleteButton, addTasktoProject, taskFunctions, local_storage_selected_key} from './functions';
import './style.css';

// Selectors
export const newProject = document.getElementById('form-input');
export const newTaskTitle = document.getElementById('task-form-title-input')
export const newTaskDescription = document.getElementById('task-form-description-input')
export const newTaskDueDate = document.getElementById('task-form-dueDate-input')
export const newTaskPriority = document.getElementById('task-form-priority-input')
export const newTaskNotes = document.getElementById('task-form-notes-input')
export const newTaskCheckList = document.getElementById('task-form-checkList-input')

//Class constructors


// //Preset input
// const defaultProject = new Project("default")
// projectList.push(defaultProject);

//Creates elements for each project in the ProjectList array
libraryFunctions.renderProjectLibrary();
taskFunctions.renderTasks();

export const projectItemList = document.querySelectorAll (".project-item")
// selectProject();
// function selectProject(){
//     projectItemList.forEach(project=>{
//         project.addEventListener('click', ()=>{ 
//             // save clicked project ID
//                 if (project.style.fontWeight == "bold"){
//                     project.style.fontWeight="normal";
//                     console.log("this is deselected Project", project);
//                 }else{
//                     //use if statement add selected project class to the div and
//                     // if it is not the selected div then remove the selected class
//                     project.style.fontWeight="bold";
//                     selectedProjectID = projectsList[project.dataset.project].ID;
//                     console.log("this is selected Project", selectedProjectID);
//                     saveSelected();
//                     console.log(local_storage_selected_key);
//                 }
//             })
//         })
// }

export const projectForm = document.getElementById("project-form");
projectForm.addEventListener('submit',e =>{
    e.preventDefault();
    addProjectToLibrary();
    newProject.value = "";
    save();
    libraryFunctions.renderProjectLibrary();

});

export const taskForm = document.getElementById("task-form")
taskForm.addEventListener("submit",e =>{
    e.preventDefault();
    addTasktoProject();
    taskFunctions.renderTasks();
    newTaskDescription.value="";
    console.log(projectsList);
    console.log(localStorage);
})











