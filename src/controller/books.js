const {Books,Category,Users} = require("../../models");

exports.read = async (req,res) =>{
    try {
        const loadBook = await Books.findAll({
            include:[{
                model: Category,
                as:"category",
                attributes:{
                    exclude:["createdAt", "updatedAt"],
                }
            },{
                model: Users,
                as:"user",
                attributes:{
                    exclude:["password","createdAt", "updatedAt"],
                }
            }],
            attributes:{
                exclude:["createdAt", "updatedAt","CategoryId","UserId","categoryId","userId"],
            }
        })
        res.status(200).send({
            message: "Books data has successfully loaded",
            data: { loadBook },
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

exports.detail = async (req,res) =>{
    try {
        const {id} = req.params;
        const detailBooks = await Books.findOne({
            where:{
                id,
            },
            include:[{
                model: Category,
                as:"category",
                attributes:{
                    exclude:["createdAt", "updatedAt"],
                }                
            },{
                model: Users,
                as:"user",
                attributes:{
                    exclude:["password","createdAt", "updatedAt"],
                }
            }],
            attributes:{
                exclude:["createdAt", "updatedAt","CategoryId","UserId","categoryId","userId"],
            }
        })
        res.status(200).send({
            message: `Book with id: ${id} has successfully loaded`,
            data:{
                detailBooks,
            }
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
        const bookCreated = await Books.create(req.body);
        res.status(200).send({
            message: "New book has successfully created",
            data: { bookCreated },
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

exports.update = async (req,res) =>{
    try {
        const id = req.params.id;
        const body = req.body;
        await Books.update({
            title: body.title,
            publication: body.publication,
            categoryId: body.categoryId,
            userId: body.userId,
            pages: body.pages,
            ISBN: body.ISBN,
            aboutBook: body.aboutBook,
            file: body.file,
            status: body.status,
        },{where:{id}})
        res.status(200).send({
            message: `Book with id: ${id} has successfully updated`,
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
        const { id } = req.params;
        await Books.destroy({
            where: {
                id,
            },
        });
        res.status(200).send({
            message: `Book with id: ${id} has successfully deleted`,
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