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
export let selectedProject = "";

export function selectProjectId () {

    projectsListDiv.addEventListener('click', (e) => {
        if (e.target.tagName.toLowerCase()==="li") {
            // set selected project id by click on projects list item
            selectedProjectID = e.target.dataset.projectId;

            localStorage.setItem(local_storage_selected_key, selectedProjectID);
            save();

            libraryFunctions.renderProjectLibrary();
            taskFunctions.renderTasks();
             // to change the bold project


        }
        console.log(selectedProjectID);
        console.log(localStorage);
    });

};
            
    
            // localStorage.setItem(local_storage_selected_key, selectedProjectID);
            //     console.log(localStorage); //
            // save();
    
            // taskFunctions.renderTasks();
    
    
            // removeAllChildNodes(tasksListDiv);
            // taskFunctions.renderTasks();
            //make sure to render selected rendertasks
    
//         };;
    
//     })
// }



export let selectedProjectID = localStorage.getItem(local_storage_selected_key);


export let projectsList= [];
//project list array
if (localStorage.getItem(local_storage_key)) {
    projectsList = JSON.parse(localStorage.getItem(local_storage_key));
} else { 
    projectsList = [defaultProject];
};


// selectedProject = projectsList.find(project=>{
//     return project.ID === selectedProjectID
// })
// // console.log(selectedProject);

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

    const renderTasks = function() {
        removeAllChildNodes(tasksListDiv);
        if( !selectedProjectID || selectedProjectID === null || selectedProjectID ==="") {
            console.log("selectedProject does not exist")
            taskContainer.style.display = "none";

            }else {
                for(let i = 0; i < [selectedProject.tasks].length; i++) {
                    selectedProject.tasks.forEach(eachTask => {
                        let task = document.createElement("div");
                        tasksListDiv.appendChild(task);
                        task.classList.add("task-item");
                        task.setAttribute("data-task", i);
        
                        let taskDescription = document.createElement("li");
                        task.appendChild(taskDescription);
                        taskDescription.classList.add("task-item-description");
                        taskDescription.textContent = eachTask.description;
            
                        let taskDueDate = document.createElement("li");
                        task.appendChild(taskDueDate);
                        taskDueDate.classList.add("task-item-dueDate");
                        taskDueDate.textContent = eachTask.dueDate;
            
                        let taskPriority = document.createElement("li");
                        task.appendChild(taskPriority);
                        taskPriority.classList.add("task-item-priority");
                        taskPriority.textContent = eachTask.priority;
            
                        let taskComplete = document.createElement("button");
                        task.appendChild(taskComplete);
                        taskComplete.classList.add("task-item-complete");
                        taskComplete.textContent = eachTask.complete;
        
                        let taskDeleteButton = document.createElement("button");
                        task.appendChild(taskDeleteButton);
                        taskDeleteButton.classList.add("task-delete-button");
                        taskDeleteButton.textContent = "Delete Task"
                    });
            }
    }

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









