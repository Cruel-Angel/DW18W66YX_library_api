const { Users } = require("../../models");

exports.read = async (req, res) => {
  try {
    const user = await Users.findAll({
      attributes:{
        exclude:["password","createdAt", "updatedAt"],
      }
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
