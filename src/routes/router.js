const express = require("express");
const router = express.Router();
const { authentication } = require("../../middleware/authentication");
const { upload } = require("../../middleware/uploadFile");
const { cloudUpload } = require("../../middleware/cloudinaryUpload");
//controller register & login
const { register, login, checkAuth } = require("../controller/auth");
//router auth register & login
router.post("/register", register);
router.post("/login", login);
router.get("/auth", authentication, checkAuth);

//controller users
const {
  read: getUsers,
  delete: deleteUsers,
  detail: detailUsers,
  update: updateUser,
} = require("../controller/users");
//router users
router.get("/users", getUsers);
router.get("/user/:id", detailUsers);
router.delete("/user/:id", deleteUsers);
router.patch("/user/:id", authentication, cloudUpload("avatar"), updateUser);

//controller category
const {
  read: getCategorys,
  create: storeCategorys,
  delete: deleteCategorys,
  detail: detailCategorys,
  update: editCategorys,
} = require("../controller/categories");
//router category
router.get("/categories", getCategorys);
router.get("/category/:name", detailCategorys);
router.post("/category", authentication, storeCategorys);
router.patch("/category/:id", authentication, editCategorys);
router.delete("/category/:id", authentication, deleteCategorys);

//controller books
const {
  read: getBooks,
  detail: detailBook,
  detailByISBN,
  create: storeBook,
  update: editBook,
  delete: deleteBook,
} = require("../controller/books");
//router books
router.get("/books", getBooks);
router.get("/book/:id", detailBook);
router.get("/bookBy/:ISBN", detailByISBN);
router.post("/book", authentication, cloudUpload("book"), storeBook);
router.patch("/book/:id", authentication, editBook);
router.delete("/book/:id", authentication, deleteBook);

//controller relation
const {
  read: getRelations,
  relation: storeRelationsBC,
  create: storeRelationsBU,
  delete: deleletRelations,
} = require("../controller/relations");
//router relation
router.get("/relations", getRelations);
router.post("/relations", authentication, storeRelationsBU);
router.post("/relation", authentication, storeRelationsBC);
router.delete("/relations/:BookId/:UserId", authentication, deleletRelations);

module.exports = router;
