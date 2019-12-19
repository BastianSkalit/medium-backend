const jwt = require("jsonwebtoken");

const models = require("../models");
const Users = models.users;

exports.login = (req, res) => {
  //check if email and pass match in db tbl user
  const email = req.body.email;
  const password = req.body.password; //use encryption in real world case!

  Users.findOne({ where: { email, password } }).then(user => {
    if (user) {
      const token = jwt.sign({ userId: user.id }, "my-secret-key");
      res.send({
        user,
        token
      });
    } else {
      res.send({
        error: true,
        message: "Wrong Email or Password!"
      });
    }
  });
};

exports.register = (req, res) => {
  const { fullname, username, email, password } = req.body;

  Users.findAll({
    where: {
      username
    }
  }).then(user => {
    if (user.length > 0) {
      res.send({
        is_success: 0,
        status: 200,
        message: "Username has been taken!",
        data: {}
      });
    } else {
      Users.findAll({
        where: {
          email
        }
      }).then(user => {
        if (user.length > 0) {
          res.send({
            is_success: 0,
            status: 200,
            message: "Email has been registered!",
            data: {}
          });
        } else {
          try {
            Users.create({
              fullname: fullname,
              username: username,
              email: email,
              password: password,
              is_active: 1
            }).then(user => {
              const token = jwt.sign({ userId: user.id }, "Bastian");
              res.send({
                is_success: 1,
                status: 200,
                message: "Success",
                data: {
                  email,
                  token
                }
              });
            });
          } catch (error) {
            res.send({
              is_success: 0,
              status: 500,
              message: "Failed! : " + error,
              data: {}
            });
          }
        }
      });
    }
  });
};
