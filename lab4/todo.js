const mongoCollections = require("./mongoCollections");
const todo = mongoCollections.todo;

module.exports = {
    async createTask(title, description) {
        if (!title) throw "You must provide a title";
        if (!description) throw "You must provide a descrition";


        const todoCollection = await todo();

        let newTodoItem = {
            _id: require('uuid/v1'),
            title: title,
            description: description,
            completed: false,
            completedAt: null,
        }

        const insertInfo = await todoCollection.insertOne(newTodoItem);
        if (insertInfo.insertedCount === 0) throw "Could not add todo";

        const newId = insertInfo.insertedId;

        const addedTodo = await this.getTask(newId);

        return addedTodo;
    },

    async getAllTasks() {
        const todoCollection = await todo();

        const allTasks = await todoCollection.find({}).toArray();

        return allTasks;
    },

    async getTask(id) {
        if (!id) throw "You must provide an id to search for";

        const todoCollection = await todo();
        const todoTarget = await todoCollection.findOne({_id: id});
        if (todoTarget === null) throw "No todo item with that id";

        return todoTarget;
    },

    async completeTask(taskId) {
        if (!taskId) throw "You must provide an id to search for";

        const todoCollection = await todo();
        let task = await todoCollection.findOne({_id: taskId});
        if (task === null) throw "No todo item with that id";

        task.completed = true;
        task.completedAt = new Date();
        return task;
    },

    async removeTask(id) {
        if (!id) throw "You must provide an id to search for";

        const todoCollection = await todo();
        const deletionInfo = await todoCollection.removeOne({_id: id});

        if(deletionInfo.deleteCount === 0) {
            throw `Could not delete dog with id of ${id}`;
        }
    },
}
