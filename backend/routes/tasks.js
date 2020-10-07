const { Router } = require("express");
const router = Router();

const { showTasks, 
        showTask,
        createTask, 
        doneTask, 
        deleteTask } = require('../controllers/tasks-controller');

router.route('/').get(showTasks)
                .post(createTask);

router.route('/:id').get(showTask)
                .put(doneTask)
                .delete(deleteTask);

module.exports = router;                   