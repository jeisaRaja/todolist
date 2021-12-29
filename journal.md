# To Do List
## Day 1
### 27 Dec 2021
Today just starting to plan the project, I already make the web design sketch.
There will be 'Project' class that contains the 'Todo' objects. User can make todo that not related with any of the Project object.
that Todo will automatically assigned to some default Project object, like 'Default' or 'Unkown' or 'General' or just 'Todo'.

The Project object will contain an array of todos.

## Day 2
### 29 Dec 2021
So the plan is to make an array of projects and todos.
We need to loop the array with forEach and each loop we add new todo div to the content.

Need to find out how the navigation work because now, there is a crucial problem. that is we cant divide the content_body separately.
We need to loop for the project / todo then we also need to push that into the html.

possible solution : 
    / make a function that determine which array the app should loop over, if user chose tab todo, then the function need to clear the innerHTML of the content_body and then loop over project array and then append child.
