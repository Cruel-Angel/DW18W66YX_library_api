const {Users} = require("../../models");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const joi = require("@hapi/joi");

const saltValue = 10;
const key = process.env.JWT_key;

exports.register = async (req,res) =>{
    try {
        const {email,password,fullName,gender,phone,address} = req.body;

        const schema = joi.object({
            email: joi.string().email().required(),
            password: joi.string().min(8).required(),
            fullName: joi.string().min(3).required(),
            gender: joi.string().valid("male","female").required(),
            phone: joi.string().regex(/^[0-9]+$/).required(),
            address: joi.string().required(),
        })

        const {error} = schema.validate(req.body);

        if(error){
            return res.status(400).send({
                error:{
                    message : error.details[0].message,
                }
            })
        }
        
        const checkEmail = await Users.findOne({
            where:{
                email
            }
        })

        if(checkEmail){
            return res.status(400).send({
                message: "Email is already exists"
            })
        }
        
        const hashedPassword = await bcrypt.hash(password,saltValue);

        const user = await Users.create({
            email,
            password : hashedPassword,
            fullName,
            gender,
            phone,
            address,
        })        

        const token = jwt.sign({
            id: user.id
        },key);

        res.status(200).send({
            message: "Registration has been successfully carried out",
            data :{
                email,
                token,
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

exports.login = async (req,res) =>{
    try {
        const {email,password} = req.body;

        const schema = joi.object({
            email: joi.string().email().required(),
            password: joi.string().min(8).required()
        })
        
        const {error} = schema.validate(req.body);

        if(error){
            return res.status(400).send({
                error:{
                    message : error.details[0].message,
                }
            })
        }

        const user = await Users.findOne({
            where:{
                email,
            }
        })
        if(!user){
            return res.status(400).send({
                message: "Email or password invalid",
            })
        }

        const validPassword = await bcrypt.compare(password,user.password);
        if(validPassword){
            const token = jwt.sign({id: user.id},key)

            res.status(200).send({
                message: "Login success",
                data:{
                    email,
                    token,
                }
            })
        }else{
            return res.status(400).send({
                message: "Email or password invalid",
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({
        error: {
            message: "Server ERROR :(",
        },
    });
    }
}