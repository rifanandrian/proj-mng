const { Project } = require("../models/projects");

const project_get_all = (req, res) => {
  Project.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res
        .status(400)
        .send("There is error in the server while loading projects");
    });
};

const project_get_byID = (req, res) => {
  const id = req.params.id;
  Project.findById(id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const project_create = (req, res) => {
  const project = new Project(req.body);
  project
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const project_delete = (req, res) => {
  const id = req.params.id;
  Project.findByIdAndDelete(id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = {
  project_get_all,
  project_get_byID,
  project_create,
  project_delete,
};
