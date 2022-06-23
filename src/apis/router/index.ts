import { Router } from "express";
import productRouter from "./product";
import userRouter from "./user";

const rise = Router()

rise.use('/user',userRouter)
rise.use('/product',productRouter)

export default rise