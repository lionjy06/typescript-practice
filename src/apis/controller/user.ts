import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../../main"
import { User } from "../entities/user.entity"


export const createUser = async() => {
    const user = new User()
    user.firstName = 'jin'
    user.lastName = 'yang'
    user.email = 'abc'
    user.password = '1234'
    user.age = 22

    const userRepository = AppDataSource.getRepository(User)

    await userRepository.save(user)

}


