import express from 'express'
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from '../controller/productsController.js'
const router = express.Router()

router.post('/add',createProduct)
router.get('/all',getAllProducts)
router.get('/:id',getProductById)
router.delete('/:id',deleteProduct)
router.put('/:id',updateProduct)

export default router