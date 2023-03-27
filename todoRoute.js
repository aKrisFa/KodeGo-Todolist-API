const router = require("express").Router();
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
    localStorage.setItem('tasks', '');
  }


  router.post('/create', (request, response) => {
    
    // create to do task

    const todoList = request.body.task;

    const tasks = localStorage.getItem('tasks');
    // task1|task2|task3
    // ['task1', 'task2', 'task3']
    const tasksArray = tasks.split('|');

    tasksArray.push(todoList);

    localStorage.setItem('tasks', tasksArray.join('|'));

    return response.json({
        tasks: tasksArray,
    });


    // return response.json({
    //     Shuffled: false,
    //     Remaining: deck.length,
    //     Cards: deck,
    // });
});

module.exports = router;