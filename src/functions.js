import { newProject, newTaskDescription, projectItemList } from "./index";
import { format } from 'date-fns';

export class Task{
    constructor(description, dueDate = format(new Date(), 'MM-dd-yyyy'), priority = "Priority : Low", complete = "Incomplete", deleteTask = "Delete"){
        this.ID = create_UUID();
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = complete;
        this.deleteTask= deleteTask;
    }
};
export class Project {
    constructor(title) {
        this.ID = create_UUID();
        this.title = title;
        this.tasks = [];
    } 
    setComplete() {

    }
};

const defaultProject = new Project("default")

// Selectors
export const projectsListDiv = document.querySelector(".project-list-group");
export const deleteProjectButton = document.querySelector(".delete-button");
export const tasksListDiv = document.querySelector(".task-list-group");




export const local_storage_key = 'projectslist';
export const local_storage_selected_key = 'selectedproject';
export const local_storage_selected_task_key = 'selectedtask';
export let selectedProject = "";
export let selectedTaskID = "";
export let selectedTask = "";

export function selectTaskId () {
    const taskItemList = document.querySelectorAll(".task-item")
    taskItemList.forEach( eachTask => {
        eachTask.addEventListener('click', (e) => {

            if(eachTask.dataset.taskId===selectedTaskID){

                console.log('its working!')
                eachTask.classList.remove("selectedTask")
                
                localStorage.removeItem(local_storage_selected_task_key);
                
                removeAllChildNodes(tasksListDiv);
                taskFunctions.renderTasks();
                save();

            }else{
                localStorage.removeItem(local_storage_selected_task_key);

                selectedTaskID = eachTask.dataset.taskId;
    
                localStorage.setItem(local_storage_selected_task_key, selectedTaskID)
                save();
                removeAllChildNodes(tasksListDiv);
                taskFunctions.renderTasks();
                
                selectedTask = selectedProject.tasks.find(task=>{
                    console.log(selectedTask);
                    return task.ID === selectedTaskID
                })

            }
        });
    });

}

export function selectProjectId () {

    projectsListDiv.addEventListener('click', (e) => {


        if (e.target.tagName.toLowerCase()==="li") {
            // set selected project id by click on projects list item
            selectedProjectID = e.target.dataset.projectId;
            selectedProject = projectsList.find(project=>{
                return project.ID === selectedProjectID
            })

            localStorage.setItem(local_storage_selected_key, selectedProjectID);
           

            libraryFunctions.renderProjectLibrary();
            removeAllChildNodes(tasksListDiv);
            taskFunctions.renderTasks();


            save();
             // to change the bold project


        }
        console.log(selectedProjectID);
        console.log(localStorage);
    });

};
            

export let selectedProjectID = localStorage.getItem(local_storage_selected_key);

export let projectsList= [];

// if (localStorage.getItem(local_storage_selected_task)){
//     tasksList = JSON.parse(localStorage.getItem(local_storage_selected_task))
// }else {
    
// }

//project list array
if (localStorage.getItem(local_storage_key)) {
    projectsList = JSON.parse(localStorage.getItem(local_storage_key));
} else { 
    projectsList = [defaultProject];
};

selectedProject = projectsList.find(project=>{
    return project.ID === selectedProjectID
})

console.log(selectedProject);
// console.log(selectedTask);

//Creates elements for each project in the ProjectsList array
export const libraryFunctions = (()=>{

    const renderProjectLibrary = function(){
        removeAllChildNodes(projectsListDiv);
        for(let i = 0; i < projectsList.length; i++) {
            let project = document.createElement("li");
            projectsListDiv.appendChild(project);
            project.classList.add("project-item");
            project.dataset.projectId=projectsList[i].ID
            project.textContent = projectsList[i].title;

            // console.log(selectedProjectID);

            if (projectsList[i].ID == selectedProjectID){
                project.classList.add("selectedProject")
                // console.log(projectsList)

            }else {
                project.classList.remove("selectedProject")
            }
            
        }
        
        
    }

    
    return {
        renderProjectLibrary,
    }
})();

export const taskItemList = document.querySelectorAll(".task-item")

const taskContainer= document.getElementsByClassName('task-container');

export const taskFunctions = (() => {

    // const deleteTask = function() {
    //     if (!selectProjectId || selectedTaskId === '' || selectedTaskId === null) {
    //         console.log('there is no selected task');
    //     } else {
    //         projectsList.splice(indexOfSelectedTask, 1);
    //         save();
    //     }
    // }

    const renderTasks = function() {
        if (!selectedProject){
            if( selectedProjectID === null || selectedProjectID ==="") {
            console.log("selectedProjectID does not exist")
            taskContainer.style.display = "none";
            
             }else{    
             }

        }else {
        for(let i = 0; i < [selectedProject.tasks].length; i++) {
            
            selectedProject.tasks.forEach( (eachTask) => {
            let task = document.createElement("li");
            tasksListDiv.appendChild(task);
            task.classList.add("task-item");
            task.dataset.taskId= eachTask.ID;

            let taskDescription = document.createElement("li");
            task.appendChild(taskDescription);
            taskDescription.classList.add("task-description");
            taskDescription.textContent = eachTask.description;

            let taskDueDate = document.createElement("li");
            task.appendChild(taskDueDate);
            taskDueDate.classList.add("task-dueDate");
            taskDueDate.textContent = eachTask.dueDate;

            let taskPriority = document.createElement("li");
            task.appendChild(taskPriority);
            taskPriority.classList.add("task-priority");
            taskPriority.textContent = eachTask.priority;

            let taskComplete = document.createElement("button");
            task.appendChild(taskComplete);
            taskComplete.classList.add("task-complete");
            taskComplete.textContent = eachTask.complete;

            let taskDeleteButton = document.createElement("button");
            task.appendChild(taskDeleteButton);
            taskDeleteButton.classList.add("task-delete-button");
            taskDeleteButton.textContent = "Delete Task";

            let editButton = document.createElement("button");
            task.appendChild(editButton);
            editButton.classList.add("edit-task-button")
            editButton.textContent="Edit";

            

            // add event listener to clicking of this task item div
            selectTaskId();

            editButton.addEventListener('click',(e)=>{
                if(task.dataset.taskId ==selectedTaskID){
                    console.log('its the same')
  
                    taskDescription.textContent="idkwhattodoheere";
                }
            })


            let completeButtonList = document.querySelectorAll(".task-complete")
            completeButtonList.forEach(eachComplete=>{
                eachComplete.addEventListener('click', (e)=>{
                    if(task.dataset.taskId ==selectedTaskID ){
                        if(eachTask.complete =="Complete"){
                            eachTask.complete="Incomplete";
                        }else{
                            eachTask.complete = "Complete";
                            save();
                        } 
                    }else{
                    }
                })
            })

            let allTaskDeleteButtons= document.querySelectorAll('.task-delete-button')
            allTaskDeleteButtons.forEach(eachTaskDelete =>{
                if (eachTask.ID===selectedTaskID){

                }else{
                    taskDeleteButton.style.display = "none";
                    editButton.style.display ="none";
                }
                eachTaskDelete.addEventListener('click', (e)=>{
                    if (eachTask.ID===selectedTaskID){
                        console.log('each task being recognized')
                        deleteStorageTask();
                        localStorage.removeItem(local_storage_selected_task_key, selectedTaskID);
                    }
                })
            })

            if (task.dataset.taskId == selectedTaskID) {
                task.classList.add("selectedTask")
                // console.log(projectsList)
            } else {
                task.classList.remove("selectedTask")
                
            }
            if (!selectedTaskID) {
                task.classList.remove("selectedTask")
            } else {
                    

            }

                // removeAllChildNodes(tasksListDiv);
        })
    }};
            }
    return {
        renderTasks
    }
})();

export function deleteStorageProject () {
    let storageSelectedProject = projectsList.find( project => {
        return project.ID === selectedProjectID;
        
    });

    // would separate into two functions but ok
    
    if (storageSelectedProject.ID === localStorage.getItem(local_storage_selected_key)) {
        // remove from local storage    
        localStorage.removeItem(local_storage_selected_key);
        let thisindex = projectsList.indexOf(storageSelectedProject);

        console.log(thisindex);
        console.log(storageSelectedProject);

        projectsList.splice(thisindex , 1);
        save();
        removeAllChildNodes(tasksListDiv);

        }
}
export function deleteStorageTask () {
    let storageSelectedTask = selectedProject.tasks.find( taskItem => {
        return taskItem.ID === selectedTaskID;
        
    });

    // would separate into two functions but ok
    
    if (storageSelectedTask.ID === localStorage.getItem(local_storage_selected_task_key)) {
        // remove from local storage    
        localStorage.removeItem(local_storage_selected_task_key);
        let thisTaskIndex = selectedProject.tasks.indexOf(storageSelectedTask);

        console.log(thisTaskIndex);
        console.log(storageSelectedTask);

        selectedProject.tasks.splice(thisTaskIndex , 1);
        save();
        // removeAllChildNodes(tasksListDiv);

        }
}

export function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//Adds new project values to project elements
export const addProjectToLibrary = function(){
    removeAllChildNodes(projectsListDiv);

    let newProjectItem = new Project(newProject.value);
    projectsList.push(newProjectItem);
    // console.log(projectsList);

}

export function save() {
    localStorage.setItem(local_storage_key, JSON.stringify(projectsList));
    localStorage.setItem(local_storage_selected_key, selectedProjectID);
    localStorage.setItem(local_storage_selected_task_key, selectedTaskID);
}

export function addTasktoProject() {
    removeAllChildNodes(tasksListDiv);
    //create new task

    let newTaskItem = new Task(newTaskDescription.value);
    
    selectedProject.tasks.push(newTaskItem);
    save();
}

function create_UUID(){
    let dt = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}








