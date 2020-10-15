const { Category } = require("../../models");

exports.read = async (req, res) => {
  try {
    const categorys = await Category.findAll({
        attributes:{
            exclude:["createdAt", "updatedAt"],
        }
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
    const categoryCreated = await Category.create(req.body);  
    res.status(200).send({
      message: "New category has successfully created",
      data: {
        category:{
            id: categoryCreated.id,
            name: categoryCreated.name,
        }        
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
    const categoriDeleted = await Category.destroy({
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
    const { id } = req.params;
    const detailCategory = await Category.findOne({
      where: {
        id,
      },
      attributes:{
          exclude:["createdAt", "updatedAt"],
      }
    });
    res.status(200).send({
      message: `Category with id: ${id} has successfully loaded`,
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
    const body = req.body;
    await Category.update({name: body.name},{where:{id}})
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
