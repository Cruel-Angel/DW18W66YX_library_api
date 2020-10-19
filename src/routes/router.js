const express = require("express");
const router = express.Router();
const {authentication} = require("../../middleware/authentication")
const {upload} = require("../../middleware/uploadFile");
//controller register & login
const {register,login,checkAuth} = require("../controller/auth");
//router auth register & login
router.post("/register", register);
router.post("/login",login);
router.get("/auth",authentication,checkAuth);

//controller users
const { 
  read: getUsers, 
  delete: deleteUsers,
  detail: detailUsers,
  update: updateUser,
} = require("../controller/users");
//router users
router.get("/users", getUsers);
router.get("/users/:id", detailUsers);
router.delete("/users/:id", deleteUsers);
router.patch("/users/:id",authentication,upload('avatar'),updateUser)

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
router.get("/category/:name", detailCategorys);
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
router.post("/books",authentication,upload('book'),storeBook);
router.patch("/books/:id",authentication,editBook);
router.delete("/books/:id",authentication,deleteBook);

//controller relation
const{
  read: getRelations,
  create: storeRelations,
  delete: deleletRelations,
} = require("../controller/relation");
//router relation
router.get("/relations",getRelations);
router.post("/relations",authentication,storeRelations);
router.delete("/relations/:BookId/:userId",authentication,deleletRelations)

module.exports = router;