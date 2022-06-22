import { Router } from 'express'
import { createUser } from '../controller/user'

const userRouter = Router()

userRouter.post('/create',createUser)

export default userRouter