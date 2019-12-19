const models = require("../models");
const Comment = models.comment;
const Articles = models.articles;
const Users = models.users;

exports.index = (req, res) => {
  Comment.findAll({
    include: [
      {
        model: Articles,
        as: "articleId",
        attributes: {
          exclude: ["createdAt", "updatedAt", "is_published", "is_archived"]
        }
      },
      {
        model: Users,
        as: "userId",
        attributes: {
          exclude: ["createdAt", "updatedAt", "is_published", "is_archived"]
        }
      }
    ]
  }).then(comment => res.send(comment));
};

exports.show = (req, res) => {
  Comment.findOne({ id: req.params.id }).then(comment => res.send(comment));
};

exports.add = (req, res) => {
  Comment.create(req.body).then(comment => {
    res.send({
      message: "success",
      comment
    });
  });
};

exports.update = (req, res) => {
  Comment.update(req.body, { where: { id: req.params.id } }).then(comment => {
    res.send({
      message: "success",
      comment
    });
  });
};

exports.delete = (req, res) => {
  Comment.destroy({ where: { id: req.params.id } }).then(comment => {
    res.send({
      message: "success",
      comment
    });
  });
};
