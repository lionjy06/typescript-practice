import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../../main"
import { User } from "../entities/user.entity"




export const createUser = async (req:Request, res:Response, next:NextFunction): Promise<User> => {
    const user = await AppDataSource.getRepository(User)
    return await user.save({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
        age:33
    })
}

export const findByEmail = async (req:Request, res:Response, next:NextFunction): Promise<User> => {
    const user = await User.findOne({where:{email:req.body.email}})
    if(!user) throw new Error('없는 이메일 입니다.')
    res.status(200).send(user)
    return user
}


