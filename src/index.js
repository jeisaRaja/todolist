import {Todo} from './todo_class';
import {Project} from './project_class';
import './style.css';

// QUERY SELECTOR
const main = document.querySelector('.main')
const content = document.querySelector('.content');
const h1 = document.querySelector('.title_text');
const navbar = document.querySelector('.navbar');
const content_title = document.querySelector('.content_title');
// const btn = document.querySelector('.click')
const submit = document.querySelector('.submit')
const form_project = document.querySelector('.form_project')
const modal_project = document.querySelector('#modal_project')
const modal_todo = document.querySelector('#modal_todo')
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

let array_project = [
    {
        title:'hello', 
        description:'testing',
        todos: []
     },
     {
        title:'hai', 
        description:'tes lagi',
        todos: []
     }
]
let array_todo = [
    {
        title:'hai', 
        description:'tes lagi',
        dueDate: '20 januari',
        priority: 'gak penting',
        checklist: 'sudah'
     },
     {
        title:'tes 2', 
        description:'waduh lagi',
        dueDate: '50 januari',
        priority: 'penting',
        checklist: 'belom'
     },
     {
        title:'tes 2', 
        description:'waduh lagi',
        dueDate: '50 januari',
        priority: 'penting',
        checklist: 'belom'
     },
     {
        title:'tes 2', 
        description:'waduh lagi',
        dueDate: '50 januari',
        priority: 'penting',
        checklist: 'belom'
     },
     {
        title:'tes 2', 
        description:'waduh lagi',
        dueDate: '50 januari',
        priority: 'penting',
        checklist: 'belom'
     }, 
]

// btn.addEventListener('click', ()=>{
//     if(modal.style.display == 'flex'){
//         modal.style.display = 'none'
//     }
//     else{
//         modal.style.display = 'flex'
//     }
// })

document.addEventListener('DOMContentLoaded', function(){

    submit.addEventListener('click', addProject
        // console.log(form_project[0].value , form_project[1].value)
    ,false); 
},false);

function addProjectHandler(){
    
    if(modal_project.display == 'flex'){
        modal_project.style.display = 'none'
    }else{
        modal_project.style.display = 'flex'
    }
    return 0;
}
function addTodoHandler(){
    console.log(modal_todo.style.display)
    if(modal_todo.style.display == 'flex'){
        modal_todo.style.display = 'none'
    }else{
        modal_todo.style.display = 'flex'
    }
    return 0;
}

function addProject(e){
    e.preventDefault();
    const title = form_project[0].value
    const desc = form_project[1].value
    const empty_array =[]
    const project = new Project(title,desc,empty_array)
    console.log(array_project)
    array_project.push(project)
}
function addTodo(e){
    e.preventDefault();
    const title = form_project[0].value
    const desc = form_project[1].value
    const empty_array =[]
    const project = new Project(title,desc,empty_array)
    console.log(array_project)
    array_project.push(project)
}

function showProjects(){
    content_body.innerHTML = ""
    array_project.forEach(project =>{
        
        const project_title = document.createElement('h3')
        project_title.innerText = project.title
        const project_desc = document.createElement('p')
        project_desc.innerText = project.description
        content_body.appendChild(project_title)
        content_body.appendChild(project_desc)

    })
    const addButton = document.createElement('BUTTON')
    addButton.innerHTML = 'ADD PROJECT'
    addButton.classList.add('addNew')
    content_body.appendChild(addButton)
    addButton.addEventListener('click', addProjectHandler)
}

function showTodos(){
    content_body.innerHTML = ""

    array_todo.forEach(todo =>{
        
        const todo_body = document.createElement('div')
        todo_body.innerHTML = `<h3>${todo.title}</h3><p>${todo.description}</p><p>${todo.dueDate}</p><p>${todo.priority}</p><p>${todo.checklist}</p>`
        content_body.appendChild(todo_body)

    })
    const addButton = document.createElement('BUTTON')
    addButton.innerHTML = 'ADD TODO'
    addButton.classList.add('addNew')
    content_body.appendChild(addButton)

    addButton.addEventListener('click', addTodoHandler)
}

const todos_content = `<h3>This is your todos</h3>`
const projects_content =  "<h3>This is your projects</h3>"
content_title.innerHTML = todos_content

function clickListen(e){
    console.log('berhasil')
    const button_path = e.path[0].id
    if(button_path=="todos"){
        todos.classList.add('active')
        projects.classList.remove('active')
        content_title.innerHTML = todos_content
        showTodos()
    }
    else if(button_path=="projects"){
        todos.classList.remove('active')
        projects.classList.add('active')
        content_title.innerHTML = projects_content
        showProjects()
    }
}

showTodos()