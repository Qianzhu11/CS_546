const mongoCollections = require("./mongoCollection");
const todo = mongoCollections.todo;

module.exports = {
    async createTask(title, description) {
        if (!title) throw "You must provide a title";
        if (!description) throw "You must provide a descrition";

        let newTodoItem = {
            _id: require('uuid/v1'),
            title: title,
            description: description,
            completed: false,
            completedAt: null,
        }

        const insertInfo;
    },

    async getAllTasks() {
        const todoColletion = await todo();

        const todo = await todoColletion.find({}).toArray();

        return todo;
    },

    async getTask(id) {
        if (!id) throw "You must provide an id to search for";

        const todoColletion = await todo();
        const todogo = await todoColletion.findone({_id: id});
        if (todogo === null) throw "No todo item with that id";

        return todogo;
    },

    async completeTask(taskId) {

    },

    async removeTask(id) {
        if (!id) throw "You must provide an id to search for";

        const todoColletion = await todo();
        const deletionInfo = await todoColletion.removeOne({_id: id});

        if(deletionInfo.deleteCount === 0) {
            throw `Could not delete dog with id of ${id}`;
        }
    },
}
