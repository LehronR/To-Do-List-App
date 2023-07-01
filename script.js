// VARIABLES
let ul = document.querySelector('ul');
let input = document.querySelector('#newToDo');
let btn = document.querySelector('#addToDo');

// FUNCTIONS
const createNewElement = () => {
    if(input.value !== "") {
        let create = document.createElement('li');
        create.textContent = input.value;
        ul.appendChild(create);
        input.value = "";
    }
}

const removeListItem = (e) => {
    e.target.classList.add('line-through');
    setTimeout(function() {
        e.target.remove();
    }, 1000);
}

// EVENT LISTENERS
input.addEventListener('keydown', (e) => {if(e.key === "Enter") {createNewElement()}});
btn.addEventListener('click', createNewElement);
ul.addEventListener('click', removeListItem);

