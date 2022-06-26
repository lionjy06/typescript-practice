import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../../main"
import { Product } from "../entities/product.entity"
import { User } from "../entities/user.entity"
import { ProductHandler } from "../types/product"



const productHandler:ProductHandler = {
    createProduct: async( req, res, next) => {
        
        let user = await AppDataSource.getRepository(User).findOne({where:{id:req.body.userId}})
        
        console.log(user)
        const product = await AppDataSource.getRepository(Product).save({
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            userId:user
        })
        return res.status(200).send(product)
    },

    findProduct: async(req, res, next) => {

    }
}


export default productHandler