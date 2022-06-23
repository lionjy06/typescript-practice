import { Router } from 'express'
import { createUser, findByEmail } from '../controller/user'
import 'reflect-metadata'
const userRouter = Router()

userRouter.post('/create',createUser)
userRouter.get('/findEmail',findByEmail)
export default userRouter