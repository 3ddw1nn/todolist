//Imports
import './style.css';

//project list array
let projectList =[];

// Selectors
const projectListDiv = document.querySelector(".projectList-group");
const newProject = document.getElementById('formInput');

//Class constructors
class Project {
    constructor(title) {
        this.title = title;
    }    
}

//Preset input
const defaultProject = new Project("default")
projectList.push(defaultProject);

//Creates elements for each project in the ProjectList array
createProjectLibrary();
function createProjectLibrary (){
    for(let i = 0; i < projectList.length; i++) {
        let project = document.createElement("li");
        projectListDiv.appendChild(project);
        project.classList.add("project-item");
        project.setAttribute("data-project", i)
        project.textContent = projectList[i].title;
    }
}
console.log(projectList);

//Adds new project values to project elements
function addProjectToLibrary(){
    let projectLiElem = document.querySelectorAll("li")
    projectLiElem.forEach(eachProject=>{
        projectListDiv.removeChild(eachProject);
    })

    let newProjectItem = new Project(newProject.value)
    projectList.push(newProjectItem)
    console.log(projectList);

    createProjectLibrary(); 
}

//Displays new project in list
const projectForm = document.getElementById("project-form");
projectForm.addEventListener('submit',e =>{
    e.preventDefault();
    addProjectToLibrary();
    newProject.value = "";
});












