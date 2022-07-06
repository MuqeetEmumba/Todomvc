function clickItem(item) {
    item.click();
}

function toggleAll() {
    document.querySelector("#toggle-all").click();
}

function selectItemX(x) {
    document.querySelector("ul.todo-list > li:nth-child(" + x + ") input.toggle").click();
}

function deleteItemX(x) {
    document.querySelector("ul.todo-list > li:nth-child(" + x + ") button.destroy").click();
}

function clearItemX() {
    document.querySelector("button.clear-completed").click();
}

function filterCompleted() {
    location.hash = "/completed";
}

function filterAll() {
    location.hash = "/";
}

function filterActive() {
    location.hash = "/active";
}

function createTodo(name) {
    document.querySelector('input.new-todo').value = name;
    document.querySelector('input.new-todo').dispatchEvent(new Event('change',{
        'bubbles': true
    }));
}

function amendTodo(x, amendedValue) {
    document.querySelector('ul.todo-list > li:nth-child(' + x + ') > div > label').dispatchEvent(new Event('dblclick',{
        'bubbles': true
    }));
    document.querySelector('ul.todo-list > li:nth-child(' + x + ') .edit').value = amendedValue;
    document.querySelector('ul.todo-list > li:nth-child(' + x + ') .edit').dispatchEvent(new Event('blur'));
}

function toggleSingle(x) {
    var toggles = document.querySelectorAll('.toggle');
    for (togglepos = 0; togglepos < toggles.length; togglepos++) {
        if(togglepos%x==0){
            toggles[togglepos].click();
        }
    }
}
