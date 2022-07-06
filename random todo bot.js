var rando = new function() {

    function getRandomInt(x) {
        return Math.floor(Math.random() * x)
    }
    function getRandomItemIndex() {
        max = document.querySelectorAll("ul.todo-list li").length;
        if (max === 0) {
            console.log("no item to choose from");
            return 0;
        }
        x = getRandomInt(max) + 1;
        return x;
    }

    this.toggleAll = function() {
        console.log("toggle All");
        myAutoTodo.toggleAll();
    }
    
    this.selectRandomItem = function() {
        x = getRandomItemIndex();
        if (x > 0) {
            console.log("select item " + x);
            myAutoTodo.selectItemX(x);
        }
    }

    this.deleteRandomItem = function() {
        x = getRandomItemIndex();
        if (x > 0) {
            console.log("delete item " + x);
            myAutoTodo.deleteItemX(x);
        }
    }

    this.clearCompleted = function() {
        console.log("clear completed");
        myAutoTodo.clearCompleted();
    }

    this.filterCompleted = function() {
        console.log("filter completed");
        myAutoTodo.filterCompleted();
    }

    this.filterAll = function() {
        console.log("filter all");
        myAutoTodo.filterAll();
    }

    this.filterActive = function() {
        console.log("filter active");
        myAutoTodo.filterActive();
    }

    this.createRandomTodo = function() {
        console.log("create a todo");
        myAutoTodo.createTodo("random todo " + Date.now())
    }

    this.amendRandomTodo = function() {
        x = getRandomItemIndex();
        if (x > 0) {
            console.log("amend t odo " + x);
            myAutoTodo.amendTodo(x, "amend random todo " + Date.now());
        }
    }
}
