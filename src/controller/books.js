const Joi = require("@hapi/joi");
const {Books,Category,Users,BooksUserCategory} = require("../../models");

exports.read = async (req,res) =>{
    try {
        const loadBook = await Books.findAll({
            include:[{
                model: Category,
                as: "category",
                through:{
                    model: BooksUserCategory,
                    as: "info",
                    attributes:{
                        exclude:["createdAt", "updatedAt","bookId","userId","categoryId","BookId","CategoryId"],
                    },
                },
                attributes:{
                    exclude:["createdAt", "updatedAt"],
                },
            },{
                model: Users,
                as: "user",
                through:{
                    model: BooksUserCategory,
                    as: "info",
                    attributes:{
                        exclude:["createdAt", "updatedAt","bookId","userId","categoryId","BookId","CategoryId"],
                    },
                },
                attributes:{
                    exclude:["password","createdAt", "updatedAt"],
                }
            }],
            attributes:{
                exclude:["createdAt", "updatedAt"],
            }
        })
        res.status(200).send({
            message: "Books data has successfully loaded",
            data: loadBook,
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
                as: "category",
                through:{
                    model: BooksUserCategory,
                    as: "info",
                    attributes:{
                        exclude:["createdAt", "updatedAt","bookId","userId","categoryId","BookId","CategoryId"],
                    },
                },
                attributes:{
                    exclude:["createdAt", "updatedAt"],
                },
            },{
                model: Users,
                as: "user",
                through:{
                    model: BooksUserCategory,
                    as: "info",
                    attributes:{
                        exclude:["createdAt", "updatedAt","bookId","userId","categoryId","BookId","CategoryId"],
                    },
                },
                attributes:{
                    exclude:["password","createdAt", "updatedAt"],
                }
            }],
            attributes:{
                    exclude:["createdAt", "updatedAt"],
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
        const {title,author,publication,pages,ISBN,aboutBook,status,userId} = req.body;

        const schema = Joi.object({
            title: Joi.string().required(),
            author: Joi.string().required(),
            publication: Joi.string().required(),
            pages: Joi.number().required(),
            ISBN: Joi.string().required(),
            aboutBook: Joi.string().required(),
            status: Joi.string().required(),
            userId: Joi.number(),
        })

        const {error} = schema.validate(req.body);

        if(error){
            return res.status(400).send({
                error:{
                    message : error.details[0].message,
                }
            })
        }
        const bookCreated = await Books.create({
            ...req.body,
            thumbnail: req.files.thumbnail[0].filename,
            file: req.files.file[0].filename,
        });
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
            author: body.author,
            publication: body.publication,            
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
