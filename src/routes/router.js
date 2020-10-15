const express = require("express");
const router = express.Router();
const {authentication} = require("../../middleware/authentication")

//controller register & login
const {register,login,checkAuth} = require("../controller/auth");
//router auth register & login
router.post("/register", register);
router.post("/login",login);
router.get("/auth",authentication,checkAuth);

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

//controller books
const{
  read: getBooks,
  detail: detailBook,
  create: storeBook,
  update: editBook,
  delete: deleteBook,
} = require("../controller/books");
//router books
router.get("/books",getBooks);
router.get("/books/:id",detailBook)
router.post("/books",authentication,storeBook);
router.patch("/books/:id",authentication,editBook);
router.delete("/books/:id",authentication,deleteBook);
module.exports = router;