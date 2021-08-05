let addToDoButton = document.getElementById('add');
let toDoContainer = document.getElementById('to-do-c');
let input = document.getElementById('input');

addToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('p-style');
    paragraph.innerText = input.value;
    toDoContainer.appendChild(paragraph);
    input.value= "";
        paragraph.addEventListener('click' , function(){
            paragraph.style.textDecoration = "line-through";
        })
        paragraph.addEventListener('dblclick' , function(){
            toDoContainer.removeChild(paragraph);
        })
})     
 