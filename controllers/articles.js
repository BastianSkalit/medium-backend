const models = require("../models");
const Articles = models.articles;
const Users = models.users;
const Categories = models.categories;

exports.index = (req, res) => {
  Articles.findAll({
    include: [
      {
        model: Categories,
        as: "categoryId",
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
  }).then(articles => res.send(articles));
};

exports.show = (req, res) => {
  Articles.findOne({
    where: { id: req.params.id }
  }).then(articles => res.send(articles));
};

exports.add = (req, res) => {
  Articles.create(req.body).then(articles => {
    res.send({
      message: "success",
      articles
    });
  });
};

exports.update = (req, res) => {
  Articles.update(req.body, { where: { id: req.params.id } }).then(articles => {
    res.send({
      message: "success",
      articles
    });
  });
};

exports.delete = (req, res) => {
  Articles.destroy({ where: { id: req.params.id } }).then(articles => {
    res.send({
      message: "success",
      articles
    });
  });
};
