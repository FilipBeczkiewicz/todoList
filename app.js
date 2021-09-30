const btn = document.querySelector('.addtodo');
const input = document.querySelector('.input');
const todoCounter = document.querySelector('.item-left');
const todosContainer = document.querySelector('.todos');
const delatedBtn = document.querySelector('.delated');
const clearBtn = document.querySelector('.clear');
const allBtn = document.querySelector('.all');
const error = document.querySelector('.todo-error')
let count = 0;


const add = () => {
    todoAdd();
}


function todoAdd() {
    const inputValue = input.value;
    // dont add todo if inpuvalue is empty 
    if (inputValue === '') {
        return emptyInput();
    }

    // creating single todo.
    let todoElement = document.createElement('div');
    todoElement.classList.add('todo');
    count++;

    // creating todo value. 
    const todoValue = document.createElement('p');
    todoValue.classList.add('todo__input');
    todoValue.textContent = inputValue;

    //creating button.
    let todoButton = document.createElement('button');
    todoButton.classList.add('deletebutton')
    todoButton.textContent = 'delete';

    // adding todo into todos container.
    todosContainer.appendChild(todoElement);
    todoElement.appendChild(todoValue);
    todoElement.appendChild(todoButton);
    todoCounter.textContent = count;
    // count

    // claer input after add single todo.
    input.value = '';

}


const checkremove = (e) => {
    const item = e.target;

    if (item.classList == 'deletebutton') {
        const todo = item.parentElement;
        //animation
        todo.classList.toggle('done');
    }

}

const delatedTodo = () => {
    const todos = document.querySelectorAll('.todo');

    todos.forEach(todo => {
        if (todo.classList.contains('done')) {
            todo.style.display = 'flex';
        } else {
            todo.style.display = 'none';
        }
    })
    todoCounter.textContent = document.getElementsByClassName('done').length;


}

const showAll = () => {
    const todos = document.querySelectorAll('.todo');
    todos.forEach(todo => {
        if (todo.classList.contains('todo')) {
            todo.style.display = 'flex';
        }
    })
    todoCounter.textContent = count;
}

const clearTodos = () => {
    const removeTodos = document.querySelectorAll('.todo');
    removeTodos.forEach(todo => {
        todo.remove();
    })
    count = 0;
    todoCounter.textContent = count

    
}

const emptyInput = () => {
    error.classList.add('todo-error-active');
    removeError();
}

const removeError = () => {
    input.addEventListener('click', () => {
        error.classList.remove('todo-error-active');
    });
    clearBtn.addEventListener('click', () => {
        error.classList.remove('todo-error-active');
    });
    allBtn.addEventListener('click', () => {
        error.classList.remove('todo-error-active');
    });
    delatedBtn.addEventListener('click', () => {
        error.classList.remove('todo-error-active');
    })
}

//event listeners 
clearBtn.addEventListener('click', clearTodos);
todosContainer.addEventListener('click', checkremove);
btn.addEventListener('click', add);
delatedBtn.addEventListener('click', delatedTodo);
allBtn.addEventListener('click', showAll)