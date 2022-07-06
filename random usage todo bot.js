var randoBot = setInterval(function() {

    var theFunction = [];

    for (var prop in rando) {
        if (typeof rando[prop] == 'function') {
            theFunction.push(prop)
        }
    }

    var randomFunctionIndex = Math.floor(Math.random() * theFunction.length);
    rando[theFunction[randomFunctionIndex]]();

}, 100);


// clearInterval(randoBot)