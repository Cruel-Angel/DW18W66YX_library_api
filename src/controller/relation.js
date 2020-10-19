const {BooksUserCategory} = require("../../models");

exports.read = async (req,res) =>{
    try {
        const loadRelation = await BooksUserCategory.findAll({
            attributes:{
                exclude:["createdAt", "updatedAt","bookId","categoryId"],
            }
        })
        res.status(200).send({
            message: "RELATION succesfully loaded",
            data:{loadRelation}
        })
    } catch (err) {
        console.log(err);
        res.status(500).send({
        error: {
            message: "Server ERROR :(",
        },
        });
    }
}
exports.create = async (req,res) =>{
    try {
        const createRelation = await BooksUserCategory.create(req.body);  
        res.status(200).send({
            message: "New relation has successfully created",
            data: {
                createRelation
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
}

exports.delete = async (req,res) =>{
    try {
        const {BookId,userId} = req.params;
        await BooksUserCategory.destroy({
            where:{
                BookId,
                userId,
            }
        })
        res.status(200).send({
            message: `Relation with BookId: ${BookId} and userId: ${userId} has successfully deleted`,
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
        error: {
            message: "Server ERROR :(",
        },
        });
    }
}