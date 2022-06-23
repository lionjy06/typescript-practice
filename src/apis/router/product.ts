import { Router } from 'express'
import { createProduct } from '../controller/product'
import 'reflect-metadata'

const productRouter = Router()

productRouter.post('/create',createProduct)

export default productRouter