const express = require("express");
const bodyParser = require("body-parser");
require("express-group-routes");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;

app.use(bodyParser.json());

//controllers
const ArticlesControllers = require("./controllers/articles");
const CategoriesControllers = require("./controllers/categories");
const CommentControllers = require("./controllers/comment");
const FollowControllers = require("./controllers/follow");
const UsersControllers = require("./controllers/users");
const AuthController = require("./controllers/auth");
//middlewares
const { authenticated } = require("./middleware");

app.post("/verify", (req, res) => {
  // kita get dahulu headernya
  const authHeader = req.headers["authorization"];

  // lalu kita ambil tokenya dengan cara melakukan split bearer dan token, lalu kita ambil tokennya di index ke 1,
  // lalu kita perlu pengkondisian, jika headernya tidak ada kita akan mengembalikan null dan  menginformasikan bahwa permintaan Unauthorized
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    res.status(401).json({ message: "Unauthorized" });
  }

  // Lalu jika terdapat header kita juga perlu memastikan apakah token yang kita dapatkan valid
  // untuk ini kita dapat menggunakan jwt.verify, lalu kita menggunakan collback untuk memberikan informasi ke user
  jwt.verify(token, "my-secret-key", (err, user) => {
    if (err) {
      return res.status(403).send({ message: "Your Token No Longer Valid" });
    }
    console.log(user);
  });
});

app.group("/api/v1", router => {
  //auth API
  router.post("/login", AuthController.login);
  router.post("/register", AuthController.register);

  //todos API
  router.get("/users", UsersControllers.index);
  router.get("/users/:id", UsersControllers.show);
  router.post("/users", authenticated, UsersControllers.add);
  router.patch("/users/:id", authenticated, UsersControllers.update);
  router.delete("/users/:id", authenticated, UsersControllers.delete);

  //another APIs goes here
  router.get("/articles", ArticlesControllers.index);
  router.get("/articles/:id", ArticlesControllers.show);
  router.post("/articles", authenticated, ArticlesControllers.add);
  router.patch("/articles/:id", authenticated, ArticlesControllers.update);
  router.delete("/articles/:id", authenticated, ArticlesControllers.delete);

  router.get("/categories", CategoriesControllers.index);
  router.get("/categories/:id", CategoriesControllers.show);
  router.post("/categories", authenticated, CategoriesControllers.add);
  router.patch("/categories/:id", authenticated, CategoriesControllers.update);
  router.delete("/categories/:id", authenticated, CategoriesControllers.delete);

  router.get("/comment", CommentControllers.index);
  router.get("/comment/:id", CommentControllers.show);
  router.post("/comment", authenticated, CommentControllers.add);
  router.patch("/comment/:id", authenticated, CommentControllers.update);
  router.delete("/comment/:id", authenticated, CommentControllers.delete);

  router.get("/follow", FollowControllers.index);
  router.get("/follow/:id", FollowControllers.show);
  router.post("/follow", authenticated, FollowControllers.add);
  router.patch("/follow/:id", authenticated, FollowControllers.update);
  router.delete("/follow/:id", authenticated, FollowControllers.delete);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
