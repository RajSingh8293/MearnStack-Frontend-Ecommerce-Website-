import express from 'express'
import { addProduct, getProductById, getProducts, searchProduct } from '../controllers/product.controlles.js'

// import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

router.get('/products', getProducts)
router.post('/product', addProduct)
router.get('/search/:key', searchProduct)
// router.delete('/product/:id', deleteProduct)
router.get('/product/:id', getProductById)
// router.put('/product/:id', updateProduct)
// router.get('/search/:key', searchProduct)




export default router