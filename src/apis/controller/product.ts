import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../../main"
import { Product } from "../entities/product.entity"

export const createProduct = async (req:Request ,res:Response,next:NextFunction): Promise<Product> => {
    const product = await AppDataSource.getRepository(Product).save({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price
    })

    return product
}
