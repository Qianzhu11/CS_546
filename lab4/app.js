const todoItems = require("./todo");
const connection = require("./mongoConnection");

const main = async () => {
    const task1 = await todoItems.createTask(
        "Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?"
    )
    
    console.log("New task has been added");
    console.log(task1);

    const task2 = await todoItems.createTask(
        "Play Pokemon with Twitch TV", "Should we revive Helix?"
    )
    console.log("Task2 has been added");

    let allTasks = await todoItems.getAllTasks();

    await todoItems.removeTask(allTasks[0]._id);

    console.log(allTasks);

    allTasks = await todoItems.getAllTasks();
    console.log(allTasks);
    
    for (let i = 0; i < allTasks.length; i++) {
        let item = await todoItems.completeTask(allTasks[i]._id)
        console.log(item);
    }
};

main();