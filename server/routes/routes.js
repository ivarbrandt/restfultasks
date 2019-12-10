const TaskController = require('../controllers/controller.js');

module.exports = app => {
    app.get("api/tasks", taskController.index);
    app.post("api/tasks", taskController.add);
    app.get("api/tasks/:id", taskController.find);
    app.put("api/tasks/:id", taskController.update);
    app.delete("api/tasks/:id", taskController.delete);
}
