import { Router } from 'express'
import 'reflect-metadata'
import productHandler from '../controller/product'



const productRouter = Router()


productRouter.post('/create', productHandler.createProduct )
// productRouter.get('/findProduct', ProductCtrl.findProduct)

export default productRouter