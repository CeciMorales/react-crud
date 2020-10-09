const taskCtrl = {};
const Task = require('../models/Task');

taskCtrl.showTasks = async (req, res) => {
    await Task.all()
        .then((data) => {
            let tasks = data;
            res.json(tasks);
        })
        .catch((err) => {
            console.log(err);
        })
}

taskCtrl.showTask = async (req, res) => {
    let task = {};
    task.id = (req.params.id);

    await Task.find(task.id)
        .then((data) => {
            let task = data;
            res.json(task);
        })
        .catch((err) => {
            console.log(err);
        })
}

taskCtrl.createTask = async (req, res) => {
    let task = {};
    task.description = req.body.description;
    await Task.create(task).then((id) => {
        console.log('Task created with id: ', id);
        res.json('Task created');
    });
}

taskCtrl.doneTask = async (req, res) => {
    let task = {};
    task.id = (req.params.id);

    return await Task.done(task.id)
        .then(() => {
            console.log('Task is done with id: ', task.id);
            res.json('Task done');
        })
        .catch((err) => {
            console.log(err);
        })
}

taskCtrl.deleteTask = async (req, res) => {
    let task = {};
    task.id = (req.params.id);
    await Task.delete(task.id)
        .then(() => {
            console.log('Task deleted: ', task.id);
            res.json('Task deleted');
        
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = taskCtrl;