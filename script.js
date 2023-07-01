let ul = document.querySelector('ul');
let input = document.querySelector('#newToDo');
let btn = document.querySelector('#addToDo');


btn.addEventListener('click', function(e) {
    if(input.value !== "") {
        let create = document.createElement('li');
        create.textContent = input.value;
        ul.appendChild(create);
        input.value = "";
    }
});

ul.addEventListener('click', function(e) {
    e.target.classList.add('line-through');
    setTimeout(function() {
        e.target.remove();
    }, 1000);
});

