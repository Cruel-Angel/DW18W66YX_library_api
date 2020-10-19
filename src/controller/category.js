const { Category, BooksUserCategory,Books } = require("../../models");

exports.read = async (req, res) => {
  try {
    const categorys = await Category.findAll({
        include:{
          model: Books,
          as: "books",
          through:{
            model: BooksUserCategory,
            as: "info",
            attributes:{
                exclude:["createdAt", "updatedAt","bookId","userId","categoryId","BookId","CategoryId"],
            },
          },
        },
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
    const { name } = req.params;
    const detailCategory = await Category.findOne({
      where: {
        name,
      },
      include:{
          model: Books,
          as: "books",
          through:{
            model: BooksUserCategory,
            as: "info",
            attributes:{
                exclude:["createdAt", "updatedAt","bookId","userId","categoryId","BookId","CategoryId"],
            },
          },
          attributes:{
            exclude:["createdAt", "updatedAt"],
          }
        },
      attributes:{
          exclude:["createdAt", "updatedAt"],
      }
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
