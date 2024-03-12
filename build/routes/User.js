"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
/* import wishlistRouter from './wishlist' */
const router = express_1.default.Router();
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
exports.default = router;
