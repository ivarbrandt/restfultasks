const Task = require("../models/task.js");

module.exports.index = function(req, res) {
  Task.find()
    .then(Tasks => res.json(Tasks))
    .catch(err => res.json(err));
};

module.exports.find = function(req, res) {
  Task.findOne({ _id: req.params.id })
    .then(onetask => res.json(onetask))
    .catch(err => res.json(err));
};

module.exports.add = function(req, res) {
  console.log("fvneijgbiejrngenr")
  console.log(req.body);
  // console.log(req);
  // task.title = req.body.title;
  // task.description = req.body.description;
  // task.completed = req.body.completed;
    Task.create(req.body)
    .then(newtask => res.json(newtask))
    .catch(err => console.log(err));
};

module.exports.update = function(req, res) {
  Task.updateOne({ _id: req.params.id }, req.body)
    .then(updatedtask => res.json(updatedtask))
    .catch(err => res.json(err));
};

module.exports.delete = function(req, res) {
  Task.deleteOne({ _id: req.params.id })
  .then(deletedtask => res.json(deletedtask)
  );
};
