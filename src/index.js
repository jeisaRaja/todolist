import {Todo} from './todo_class';
import {Project} from './project_class';
import './style.css';

// QUERY SELECTOR
const content = document.querySelector('.content');
const h1 = document.querySelector('.title_text');
const navbar = document.querySelector('.navbar');

const h1_todo = "<h2>Your</h2>Todo List";
h1.innerHTML = h1_todo;

const nav_main = "<div class='navItem blue leftNav'><h5>Todo's</h5></div><div class='navItem rightNav'><h5>Project's</h5></div>"
navbar.innerHTML = nav_main;