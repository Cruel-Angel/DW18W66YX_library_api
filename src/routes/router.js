const express = require("express");
const router = express.Router();
const {authentication} = require("../../middleware/authentication")

//controller register & login
const {register,login} = require("../controller/auth");
//router auth register & login
router.post("/register", register);
router.post("/login",login);

//controller users
const { read: getUsers, delete: deleteUsers } = require("../controller/users");
//router users
router.get("/users", getUsers);
router.delete("/users/:id", deleteUsers);

//controller category
const {
  read: getCategorys,
  create: storeCategorys,
  delete: deleteCategorys,
  detail: detailCategorys,
  update: editCategorys,
} = require("../controller/category");
//router category
router.get("/category", getCategorys);
router.get("/category/:id", detailCategorys);
router.post("/category",authentication, storeCategorys);
router.patch("/category/:id",authentication, editCategorys);
router.delete("/category/:id",authentication, deleteCategorys);

module.exports = router;