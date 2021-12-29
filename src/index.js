import {Todo} from './todo_class';
import {Project} from './project_class';
import './style.css';

// QUERY SELECTOR
const content = document.querySelector('.content');
const h1 = document.querySelector('.title_text');
const navbar = document.querySelector('.navbar');
const content_title = document.querySelector('.content_title');
const btn = document.querySelector('.click')
const submit = document.querySelector('.submit')
const form_project = document.querySelector('.form_project')
const modal = document.querySelector('.modal')
const content_body = document.querySelector('.content_body')


const h1_todo = "<h2>Your</h2>Todo List";
h1.innerHTML = h1_todo;

const nav_main = "<button class='navItem blue leftNav active' id='todos'>Todo's</button><button class='navItem rightNav' id='projects'>Project's</button>"
navbar.innerHTML = nav_main;
const navItem = document.querySelectorAll('.navItem')
const todos = document.querySelector('#todos')
const projects = document.querySelector('#projects')

navItem.forEach(nav =>{
    nav.addEventListener('click', clickListen, false)
})

let array_project = []
let array_todo = []

btn.addEventListener('click', ()=>{
    if(modal.style.display == 'flex'){
        modal.style.display = 'none'
    }
    else{
        modal.style.display = 'flex'
    }
})

document.addEventListener('DOMContentLoaded', function(){

    submit.addEventListener('click', addProject
        // console.log(form_project[0].value , form_project[1].value)
    ,false); 
},false);

function addProject(e){
    e.preventDefault();
    const title = form_project[0].value
    const desc = form_project[1].value
    const empty_array =[]
    const project = new Project(title,desc,empty_array)
    console.log(array_project)
    array_project.push(project)
    showProject()
}

function showProject(){
    content_body.innerHTML=""
    array_project.forEach(project=>{
        const h3 = document.createElement('h3')
        const desc = document.createElement('p')

        h3.textContent = project.title
        desc.textContent = project.description
        content_body.appendChild(h3)
        content_body.appendChild(desc)
    })
}

const todos_content = `<h3>This is your todos</h3>`
const projects_content =  "<h3>This is your projects</h3>"
content_title.innerHTML = todos_content

function clickListen(e){
    const button_path = e.path[0].id
    if(button_path=="todos"){
        todos.classList.add('active')
        projects.classList.remove('active')
        content_title.innerHTML = todos_content
    }
    else if(button_path=="projects"){
        todos.classList.remove('active')
        projects.classList.add('active')
        content_title.innerHTML = projects_content
    }
}

