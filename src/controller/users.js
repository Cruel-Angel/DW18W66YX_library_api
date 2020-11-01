const { Users, Books, booksUsersCategories } = require("../../models");

exports.read = async (req, res) => {
  try {
    const user = await Users.findAll({
      include: {
        model: Books,
        as: "books",
        through: {
          model: booksUsersCategories,
          as: "info",
          attributes: {
            exclude: [
              "createdAt",
              "updatedAt",
              "bookId",
              "userId",
              "categoryId",
              "BookId",
              "CategoryId",
              "UserId",
            ],
          },
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });
    res.status(200).send({
      message: "Users data has successfully loaded",
      data: { user },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR :(",
      },
    });
  }
};

exports.detail = async (req, res) => {
  try {
    const { id } = req.params;

    const checkUser = await Users.findOne({
      where: {
        id,
      },
    });

    if (!checkUser) {
      return res.status(400).send({
        message: `Ther is no user with id :${id}`,
      });
    }

    const user = await Users.findOne({
      where: {
        id,
      },
      include: {
        model: Books,
        as: "books",
        through: {
          model: booksUsersCategories,
          as: "info",
          attributes: {
            exclude: [
              "createdAt",
              "updatedAt",
              "bookId",
              "userId",
              "categoryId",
              "BookId",
              "CategoryId",
            ],
          },
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });
    res.status(200).send({
      message: "Users data has successfully loaded",
      data: { user },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR :(",
      },
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    const checkUser = await Users.findOne({
      where: {
        id,
      },
    });

    if (!checkUser) {
      return res.status(400).send({
        message: `There is no user with id :${id}`,
      });
    }

    await Users.destroy({
      where: {
        id,
      },
    });

    res.status(200).send({
      message: `User with id: ${id} has successfully deleted`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR :(",
      },
    });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;

    const checkUser = await Users.findOne({
      where: {
        id,
      },
    });

    if (!checkUser) {
      return res.status(400).send({
        message: `There is no user with id :${id}`,
      });
    }

    const [updated] = await Users.update(
      {
        avatar: req.file.filename,
      },
      {
        where: {
          id,
        },
      }
    );

    if (!updated)
      return res.status(404).send({
        status: "fail",
        message: "User not found!",
        code: 404,
      });

    const data = await Users.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      message: `User updated successfully`,
      data,
      path: req.file.path,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: "error",
      message: "Internal Server Error",
      code: 500,
    });
  }
};
