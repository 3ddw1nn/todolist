import { newProject, newTaskDescription,selectedProject, projectItemList } from "./index";
import { format } from 'date-fns'

export class Task{
    constructor(description, dueDate = format(new Date(), 'MM-dd-yyyy'), priority = "Low", complete = false){
        this.ID = create_UUID();
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = complete;
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
console.log(defaultProject)

// Selectors
export const projectsListDiv = document.querySelector(".project-list-group");
export const deleteButton = document.querySelector(".delete-button")
export const tasksListDiv = document.querySelector(".task-list-group")

export const local_storage_key = 'projectslist';
export const local_storage_selected_key = 'selectedproject';

projectsListDiv.addEventListener('click', (e)=>{
    if (e.target.tagName.toLowerCase()==="li"){
        selectedProjectID = e.target.dataset.projectId;
        save();
        libraryFunctions.renderProjectLibrary();
    };;

    console.log(localStorage)
})

let selectedProjectID= localStorage.getItem(local_storage_selected_key);
console.log(selectedProjectID)


export let projectsList= [];
//project list array
if (localStorage.getItem(local_storage_key)) {
    projectsList = JSON.parse(localStorage.getItem(local_storage_key))
} else { 
    projectsList = [defaultProject];
};


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

            console.log(selectedProjectID);

            if (projectsList[i].ID == selectedProjectID){
                project.classList.add("selectedProject")
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
export let projectSelected = "";


export const taskFunctions = (()=>{
    const renderTasks = function(){
        for(let i = 0; i < projectsList.length; i++) {
            projectsList[i].tasks.forEach(eachTask => {
                let task = document.createElement("div");
                tasksListDiv.appendChild(task);
                task.classList.add("task-item");
                task.setAttribute("data-task", i)

                let taskDescription = document.createElement("li");
                task.appendChild(taskDescription)
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
    
                let taskCheckList = document.createElement("button");
                task.appendChild(taskCheckList);
                taskCheckList.classList.add("task-item-checkList");
                taskCheckList.textContent = eachTask.complete;
            });
        }
    }
    return {
        renderTasks
    }
})();


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//Adds new project values to project elements
export const addProjectToLibrary = function(){
    removeAllChildNodes(projectsListDiv);

    let newProjectItem = new Project(newProject.value)
    projectsList.push(newProjectItem)
    console.log(projectsList);

}

export function save() {
    localStorage.setItem(local_storage_key, JSON.stringify(projectsList));
    localStorage.setItem(local_storage_selected_key, selectedProjectID);
}

export function addTasktoProject() {
    removeAllChildNodes(tasksListDiv);
    //create new task
    let newTaskItem = new Task(newTaskDescription.value)

    projectsList[]/*[i]*/.tasks.push(newTaskItem);
    save();
}

// export function saveSelected(){
//     localStorage.setItem(local_storage_selected_key, JSON.stringify(selectedProject))
// }
export const selectProjectFunctions = (()=>{


    return {
    }
})();




function create_UUID(){
    let dt = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}


console.log(projectsList)







