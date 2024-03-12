import express from 'express'
/* import * as productService from '../service/productServices'
import { toNewProductEntry } from '../helpers/productHelper' */

const router = express.Router()

router.get('/', (_req, res) => {
  res.send('wishlistService.getWishlist()')
})
/* router.get('/:id', (req, res) => {
  res.send(productService.getProductById(req.params.id) ?? 'Not product found')
})

router.get('/simple', (_req, res) => {
  res.send(productService.getEntriesSimpleData())
})

router.post('/', (req, res) => {
  const newProduct = toNewProductEntry(req.body)
  const resp = productService.addEntry(newProduct)
  res.json(resp)
}) */

export default router
