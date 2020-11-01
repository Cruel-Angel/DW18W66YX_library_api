const { Categories, booksUsersCategories, Books } = require("../../models");

exports.read = async (req, res) => {
  try {
    const categorys = await Categories.findAll({
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
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.status(200).send({
      message: "Category data has been successfully loaded",
      data: { categorys },
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

exports.create = async (req, res) => {
  try {
    const { name } = req.body;

    const chechCategory = await Categories.findOne({
      where: {
        name,
      },
    });

    if (chechCategory) {
      return res.status(400).send({
        message: `Category with name : ${name} is already exists`,
      });
    }

    const categoryCreated = await Categories.create(req.body);

    res.status(200).send({
      message: "New category has successfully created",
      data: {
        category: {
          id: categoryCreated.id,
          name: categoryCreated.name,
        },
      },
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

    const chechCategory = await Categories.findOne({
      where: {
        id,
      },
    });

    if (!chechCategory) {
      return res.status(400).send({
        message: `There is no category with id : ${id}`,
      });
    }

    const categoriDeleted = await Categories.destroy({
      where: {
        id,
      },
    });
    res.status(200).send({
      message: `Category with id: ${id} has successfully deleted`,
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
    const { name } = req.params;

    const chechCategory = await Categories.findOne({
      where: {
        name,
      },
    });

    if (!chechCategory) {
      return res.status(400).send({
        message: `There is no category with name : ${name}`,
      });
    }

    const detailCategory = await Categories.findOne({
      where: {
        name,
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
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.status(200).send({
      message: `Category with name: ${name} has successfully loaded`,
      data: {
        category: detailCategory,
      },
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
    const id = req.params.id;
    const chechCategory = await Categories.findOne({
      where: {
        id,
      },
    });

    if (!chechCategory) {
      return res.status(400).send({
        message: `There is no category with id : ${id}`,
      });
    }

    const body = req.body;
    const { name } = req.body;

    const checkCategory = await Categories.findOne({
      where: {
        name,
      },
    });

    if (checkCategory) {
      return res.status(400).send({
        message: `Category with name : ${name} is already exists`,
      });
    }
    await Categories.update({ name: body.name }, { where: { id } });
    res.status(200).send({
      message: `Category with id: ${id} has successfully updated`,
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
