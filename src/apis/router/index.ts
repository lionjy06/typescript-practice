import { Router } from "express";
import userRouter from "./user";

const api = Router()

api.use('/user',userRouter)

export default api