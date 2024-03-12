import express from 'express'
/* import wishlistRouter from './wishlist' */

const router = express.Router()

/* app.use('/api/user', userRouter)

router.get('/', (_req, res) => {
  res.send(productService.getEntries())
})
router.get('/:id', (req, res) => {
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
