const models = require("../models");
const Follow = models.follow;
const Users = models.users;

exports.index = (req, res) => {
  Follow.findAll({
    include: [
      {
        model: Users,
        as: "userId",
        attributes: {
          exclude: ["createdAt", "updatedAt", "is_published", "is_archived"]
        }
      }
    ]
  }).then(follow => res.send(follow));
};

exports.show = (req, res) => {
  Follow.findOne({ id: req.params.id }).then(follow => res.send(follow));
};

exports.add = (req, res) => {
  Follow.create(req.body).then(follow => {
    res.send({
      message: "success",
      follow
    });
  });
};

exports.update = (req, res) => {
  Follow.update(req.body, { where: { id: req.params.id } }).then(follow => {
    res.send({
      message: "success",
      follow
    });
  });
};

exports.delete = (req, res) => {
  Follow.destroy({ where: { id: req.params.id } }).then(follow => {
    res.send({
      message: "success",
      follow
    });
  });
};
