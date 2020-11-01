const { booksUsersCategories } = require("../../models");

exports.read = async (req, res) => {
  try {
    const loadRelation = await booksUsersCategories.findAll();
    res.status(200).send({
      message: "RELATION succesfully loaded",
      data: { loadRelation },
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

exports.relation = async (req, res) => {
  try {
    const { BookId, CategoryId } = req.body;
    const checkRelation = await booksUsersCategories.findOne({
      where: {
        BookId,
        CategoryId,
      },
    });

    if (checkRelation) {
      return res.status(400).send({
        message: `Relation between BookId: ${BookId} and CategoryId: ${CategoryId} is already exist`,
      });
    }

    const createRelation = await booksUsersCategories.create({ ...req.body });
    res.status(200).send({
      message: "New relation has successfully created",
      data: {
        createRelation,
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

exports.create = async (req, res) => {
  try {
    const { UserId, BookId } = req.body;
    const checkRelation = await booksUsersCategories.findOne({
      where: {
        BookId,
        UserId,
      },
    });

    if (checkRelation) {
      return res.status(400).send({
        message: `Relation between BookId: ${BookId} and UserId: ${UserId} is already exist`,
      });
    }

    const createRelation = await booksUsersCategories.create({ ...req.body });
    res.status(200).send({
      message: "New relation has successfully created",
      data: {
        createRelation,
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
    const { BookId, UserId } = req.params;
    const checkRelation = await booksUsersCategories.findOne({
      where: {
        BookId,
        UserId,
      },
    });

    if (!checkRelation) {
      return res.status(400).send({
        message: `There is no relation between BookId: ${BookId} and UserId: ${UserId}`,
      });
    }

    await booksUsersCategories.destroy({
      where: {
        BookId,
        UserId,
      },
    });
    res.status(200).send({
      message: `Relation with BookId: ${BookId} and UserId: ${UserId} has successfully deleted`,
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
