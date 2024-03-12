import express from 'express'
import userRouter from './routes/user'
import wishlistRouter from './routes/wishlist'

const app = express()

app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('Ping received')
  res.send('Pong')
})

app.use('/api/user', userRouter)
app.use('/api/wishlist', wishlistRouter)

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})
